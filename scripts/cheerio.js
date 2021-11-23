const cheerio = require('cheerio');

const keyValueToAttributes = ([k, v]) => `${k}="${v}"`;

module.exports = (contents) => {
  const $ = cheerio.load(contents, { xmlMode: true });

  const { attribs } = $('svg')[0];

  delete attribs.class;
  delete attribs.style;

  const attrs = {
    stroke: 'currentColor',
    fill: 'currentColor',
    'stroke-width': 0,
    ...attribs,
    height: '1em',
    width: '1em',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  return {
    svg_attrs: Object.entries(attrs).map(keyValueToAttributes).join(' '),
    svg_contents: $('svg').html().trim(),
  };
};
