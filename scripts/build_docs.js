const fs = require('fs');
const slim = require('@teleology/slim');
const orderby = require('lodash.orderby');

const README_TEMPLATE = `# Installation
\`\`\`
yarn add solidjs-icons
\`\`\`

# Usage
Packs are split into separate paths. 

\`\`\`
import { FiX } from 'solidjs-icons/fi';
\`\`\`

# Packs

| Name   | Path   | License |
|--------|--------|---------|
{{icons}}`;

const { packages } = require('../manifest');

const replacement = orderby(packages, ['name']).map(
  ({ id, url, name, license }) => {
    const link = `[${name}](${url})`;
    return `| ${[link, id, license].join(' | ')} |`;
  },
);

const out = slim(README_TEMPLATE, {
  icons: replacement.join('\n')
});

fs.writeFileSync('README.md', out, 'utf8');