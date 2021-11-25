const fs = require('fs-extra');
const path = require('path');
const slim = require('@teleology/slim');
const cheerio = require('./cheerio');
const camelcase = require('camelcase');
const glob = require('glob').sync;

const { output, packages } = require('../manifest');

const BUILD_DIR = path.resolve(process.cwd(), output);
const ICON_TEMPLATE = `import { mergeProps } from "solid-js";

export default (props) => (<svg {...mergeProps(props)} {{svg_attrs}}>{{svg_contents}}</svg>)`;
const ICON_EXPORT_TEMPLATE = `export { default as {{name}} } from './{{name}}';`;
const PACK_EXPORT_TEMPLATE = `export * from './{{id}}'`;

const processIcon = ({ iconDir, name, file }) => {
  const contents = fs.readFileSync(file, 'utf8');
  const { svg_attrs, svg_contents } = cheerio(contents);

  // santizied
  const uncomment = svg_contents.replace(/<\!--.*?-->/gm, '')

  const outputFile = path.resolve(iconDir, `${name}.js`);
  const output = slim(ICON_TEMPLATE, { svg_attrs, svg_contents: uncomment });

  fs.writeFileSync(outputFile, output, 'utf8');

  return slim(ICON_EXPORT_TEMPLATE, { name });
}

const parseFile = ({ id, file, formatter }) => {
  const { name } = path.parse(file);

  const name1 = formatter ? formatter({ name, file }) : name;
  return {
    name: camelcase(`${id}-${name1}`, { pascalCase: true }),
    file,
  };
}

const processPackage = async (package) => {
  const files = [];
  for (const file of package.files) {
    let out;
    if (typeof file === 'string') {
      out = glob(file, { nocase: false }).map((file) => parseFile({ id: package.id, file }));
    } else {
      const { pattern, formatter } = file;
      out = glob(pattern, { nocase: false }).map((file) => parseFile({ id: package.id, file, formatter }));
    }
    files.push(out);
  }

  const allFiles = [].concat(...files);

  const names = allFiles.map((it) => it.name.toLowerCase());

  const deduplicatedFiles = allFiles.map((it, i) => {
    if (names.indexOf(it.name.toLowerCase()) !== i) {
      it.name = `${it.name}2`;
    }
    return it;
  });

  const iconDir = path.resolve(BUILD_DIR, package.id);
  fs.mkdirpSync(iconDir);

  const out = await Promise.all(deduplicatedFiles.map((it) => processIcon({ ...it, iconDir })));
  
  const outputFile = path.resolve(iconDir, 'index.js');
  const output = out.join('\n');
  fs.writeFileSync(outputFile, output, 'utf8');
  return slim(PACK_EXPORT_TEMPLATE, package);
}

(async () => {
  // build dir
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirpSync(BUILD_DIR);
  }

  const out = await Promise.all(packages.map(processPackage));
  const outputFile = path.resolve(BUILD_DIR, 'index.js');
  fs.writeFileSync(outputFile, out.join('\n'), 'utf8');
})();