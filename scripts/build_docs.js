const fs = require('fs');
const orderby = require('lodash.orderby');

const base = fs.readFileSync('readme_template.md', 'utf8');
const { packages } = require('../manifest');

const replacement = orderby(packages, ['name']).map(
  ({ id, name, license }) => `| ${[name, id, license].join(' | ')} |`,
);

const out = base.replace('{{}}', replacement.join('\n'));

fs.writeFileSync('README.md', out, 'utf8');