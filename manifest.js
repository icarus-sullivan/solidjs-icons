module.exports = {
  output: 'build',
  packages: [
    {
      id: 'ai',
      name: 'Ant Design Icons',
      url: 'https://github.com/ant-design/ant-design-icons',
      license: 'MIT',
      license_url: 'https://github.com/ant-design/ant-design-icons/blob/master/LICENSE',
      files: [
        {
          pattern: 'modules/ant-design/packages/icons-svg/svg/filled/*.svg',
          formatter: ({ name }) => `Fill-${name}`,
        },
        {
          pattern: 'modules/ant-design/packages/icons-svg/svg/outlined/*.svg',
          formatter: ({ name }) => `Outlined-${name}`,
        },
        {
          pattern: 'modules/ant-design/packages/icons-svg/svg/twotone/*.svg',
          formatter: ({ name }) => `TwoTone-${name}`,
        },
      ]
    },
    {
      id: 'fa',
      name: 'Font Awesome',
      url: 'https://fontawesome.com/',
      license: 'CC BY 4.0 License',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
      files: [
        'modules/font-awesome/svgs/regular/*.svg'
      ]
    },
    {
      id: 'di',
      name: 'Device Icons',
      url: 'https://github.com/vorillaz/devicons',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/mit-license.html',
      files: ['modules/device/!SVG/*.svg'],
    },
    {
      id: 'gi',
      name: 'Game Icons',
      url: 'https://github.com/delacannon/game-icons-inverted',
      license: 'CC BY 3.0',
      license_url: 'https://creativecommons.org/licenses/by/3.0/',
      files: ['modules/game-icons/all-icons/*.svg'],
    },
    {
      id: 'go',
      name: 'Github Octicons',
      url: 'https://github.com/primer/octicons',
      license: 'MIT',
      license_url: 'https://github.com/primer/octicons/blob/main/LICENSE',
      files: [
        {
          pattern: 'modules/github-oct/icons/*-24.svg',
          formatter: ({ name }) => name.replace(/-24/i, ''),
        },
      ],
    },
    {
      id: 'io',
      name: 'Ionicons 5',
      files: ['modules/ion/src/svg/*.svg'],
      url: 'https://github.com/ionic-team/ionicons',
      license: 'MIT',
      license_url: 'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'bs',
      name: 'Bootstrap Icons',
      files: [
        {
          pattern: 'modules/bootstrap/icons/*!(-reverse)-fill.svg',
          formatter: ({ name }) => `Fill${name}`,
        },
        {
          pattern: 'modules/bootstrap/icons/*-reverse!(-fill).svg',
          formatter: ({ name }) => `Reverse${name}`,
        },
        {
          pattern:
            'node_modules/bootstrap/icons/*!(-fill|-reverse|reverse-).svg',
        },
      ],
      url: 'https://github.com/twbs/icons',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'fi',
      name: 'Feather',
      url: 'https://feathericons.com/',
      license: 'MIT',
      license_url:
        'https://github.com/feathericons/feather/blob/master/LICENSE',
      files: ['modules/feather/icons/*.svg'],
    },
    {
      id: 'md',
      name: 'Material Design Icons',
      url: 'http://google.github.io/material-design-icons/',
      license: 'Apache License Version 2.0',
      license_url:
        'https://github.com/google/material-design-icons/blob/master/LICENSE',
      files: [
        {
          pattern:
            'modules/material-design/src/**/materialicons/24px.svg',
          formatter: ({ file }) => file.split('/').slice(-3)[0] + '.svg',
        },
      ],
    },
    {
      id: 'si',
      name: 'Simple Icons',
      files: ['modules/simple/icons/*.svg'],
      url: 'https://simpleicons.org/',
      license: 'CC0 1.0 Universal',
      license_url: 'https://creativecommons.org/publicdomain/zero/1.0/',
    },
    {
      id: 'ri',
      name: 'Remix Icons',
      url: 'https://github.com/Remix-Design/RemixIcon',
      license: 'Apache 2.0',
      license_url: 'https://github.com/Remix-Design/RemixIcon/blob/master/License',
      files: ['modules/remix/icons/**/*.svg']
    },
    {
      id: 'hi',
      name: 'Hero Icons',
      url: 'https://github.com/tailwindlabs/heroicons',
      license: 'MIT',
      license_url: 'https://github.com/tailwindlabs/heroicons/blob/master/LICENSE',
      files: ['modules/hero/optimized/solid/*.svg'],
    },
    {
      id: 'im',
      name: 'IcoMoon',
      files: [
        {
          pattern: 'modules/icomoon/SVG/*.svg',
          formatter: ({ name }) => name.slice(3),
        },
      ],
      url: 'https://github.com/Keyamoon/IcoMoon-Free',
      license: 'CC BY 4.0 License',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      id: 'ti',
      name: 'Typeicons',
      url: 'https://github.com/stephenhutchings/typicons.font',
      license: 'CC BY 4.0 License',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
      files: ['modules/typeicons/src/svg/*.svg'],
    },
    {
      id: 'bx',
      name: 'BoxIcons',
      files: [
        {
          pattern: 'modules/box/svg/regular/*.svg',
          formatter: ({ name }) => name.replace('bx', ''),
        },
      ],
      url: 'https://github.com/atisawd/boxicons',
      license: 'CC BY 4.0 License',
    },
    {
      id: 'cg',
      name: 'css.gg',
      files: ['modules/cssgo/icons/svg/*.svg'],
      url: 'https://github.com/astrit/css.gg',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'vsc',
      name: 'VS Code Icons',
      url: 'https://github.com/microsoft/vscode-codicons',
      license: 'CC BY 4.0',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
      files: ['modules/vscode/src/icons/*.svg'],
    },
    {
      id: 'wi',
      name: 'Weather Icons',
      url: 'https://github.com/erikflowers/weather-icons',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/mit-license.html',
      files: [
        {
          pattern: 'modules/weather/svg/*.svg',
          formatter: ({ name }) => name.replace(/wi-/i, ''),
        },
      ],
    },
  ],
};
