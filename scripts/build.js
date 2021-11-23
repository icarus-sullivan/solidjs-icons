const fs = require('fs-extra');
const path = require('path');
const slim = require('@teleology/slim');
const cheerio = require('./cheerio');
const pascal = require('pascalcase');
const glob = require('glob').sync;

const iconTemplate = fs.readFileSync('./templates/icon.slim', 'utf8');
const iconExportTemplate = fs.readFileSync('./templates/icon-export.slim', 'utf8');
const packExportTemplate = fs.readFileSync('./templates/pack-export.slim', 'utf8');

const { output, packages } = require('../manifest');

const BUILD_DIR = path.resolve(process.cwd(), output);

const processIcon = ({ iconDir, name, file }) => {
  const contents = fs.readFileSync(file);
  const { svg_attrs, svg_contents } = cheerio(contents);

  const outputFile = path.resolve(iconDir, `${name}.js`);
  const output = slim(iconTemplate, { svg_attrs, svg_contents });

  fs.writeFileSync(outputFile, output, 'utf8');

  return slim(iconExportTemplate, { name });
}

const parseFile = ({ id, file, formatter }) => {
  const { name } = path.parse(file);

  const name1 = formatter ? formatter(name) : name;
  return {
    name: pascal(`${id}-${name1}`),
    file,
  };
}

const processPackage = async (package) => {
  const files = [];
  for (const file of package.files) {
    let out;
    if (typeof file === 'string') {
      out = glob(file).map((file) => parseFile({ id: package.id, file }));
    } else {
      const { pattern, formatter } = file;
      out = glob(pattern).map((file) => parseFile({ id: package.id, file, formatter }));
    }
    files.push(out);
  }

  const allFiles = [].concat(...files);

  const iconDir = path.resolve(BUILD_DIR, package.id);
  fs.mkdirpSync(iconDir);

  const out = await Promise.all(allFiles.map((it) => processIcon({ ...it, iconDir })));
  
  const outputFile = path.resolve(iconDir, 'index.js');
  const output = out.join('\n');
  fs.writeFileSync(outputFile, output, 'utf8');
  return slim(packExportTemplate, package);
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