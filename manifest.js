module.exports = {
  output: 'build',
  packages: [
    {
      id: 'di',
      name: 'Device Icons',
      url: 'https://github.com/vorillaz/devicons',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/mit-license.html',
      files: ['node_modules/deviceicons/!SVG/*.svg'],
    },
    {
      id: 'gi',
      name: 'Game Icons',
      url: 'https://github.com/delacannon/game-icons-inverted',
      license: 'CC BY 3.0',
      license_url: 'https://creativecommons.org/licenses/by/3.0/',
      files: ['node_modules/gameicons/all-icons/*.svg'],
    },
    {
      id: 'go',
      name: 'Github Octicons',
      url: 'https://github.com/primer/octicons',
      license: 'MIT',
      license_url: 'https://github.com/primer/octicons/blob/main/LICENSE',
      files: [
        {
          pattern: 'node_modules/githubicons/icons/*-24.svg',
          formatter: (name) => name.replace(/-24/i, ''),
        },
      ],
    },
    {
      id: 'io',
      name: 'Ionicons 5',
      files: ['node_modules/ionicons/src/svg/*.svg'],
      url: 'https://github.com/ionic-team/ionicons',
      license: 'MIT',
      license_url: 'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'bs',
      name: 'Bootstrap Icons',
      files: [
        {
          pattern: 'node_modules/bootstrap-icons/icons/*!(-reverse)-fill.svg',
          formatter: (name) => `Fill${name}`,
        },
        {
          pattern: 'node_modules/bootstrap-icons/icons/*-reverse!(-fill).svg',
          formatter: (name) => `Reverse${name}`,
        },
        {
          pattern:
            'node_modules/bootstrap-icons/icons/*!(-fill|-reverse|reverse-).svg',
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
      files: ['node_modules/feather-icons/dist/icons/*.svg'],
    },
    {
      id: 'md',
      name: 'Material Design icons',
      url: 'http://google.github.io/material-design-icons/',
      license: 'Apache License Version 2.0',
      license_url:
        'https://github.com/google/material-design-icons/blob/master/LICENSE',
      files: [
        {
          pattern:
            'node_modules/material-design-icons/*/svg/production/*_24px.svg',
          formatter: (name) => name.replace(/Ic(\w+)24px/i, '$1'),
        },
      ],
    },
    {
      id: 'si',
      name: 'Simple Icons',
      files: ['node_modules/simple-icons/icons/*.svg'],
      url: 'https://simpleicons.org/',
      license: 'CC0 1.0 Universal',
      license_url: 'https://creativecommons.org/publicdomain/zero/1.0/',
    },
    {
      id: 'im',
      name: 'IcoMoon Free',
      files: [
        {
          pattern: 'node_modules/icomoon/SVG/*.svg',
          formatter: (name) => name.slice(3),
        },
      ],
      url: 'https://github.com/Keyamoon/IcoMoon-Free',
      license: 'CC BY 4.0 License',
    },
    {
      id: 'ti',
      name: 'Typeicons',
      url: 'https://github.com/stephenhutchings/typicons.font',
      license: 'CC BY 4.0 License',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
      files: ['node_modules/typeicons/src/svg/*.svg'],
    },
    {
      id: 'bx',
      name: 'BoxIcons',
      files: [
        {
          pattern: 'node_modules/boxicons/svg/regular/*.svg',
          formatter: (name) => name.replace('bx', ''),
        },
      ],
      url: 'https://github.com/atisawd/boxicons',
      license: 'CC BY 4.0 License',
    },
    {
      id: 'cg',
      name: 'css.gg',
      files: ['node_modules/cssgo/icons/svg/*.svg'],
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
      files: ['node_modules/vscode/src/icons/*.svg'],
    },
    {
      id: 'wi',
      name: 'Weather Icons',
      url: 'https://github.com/erikflowers/weather-icons',
      license: 'MIT',
      license_url: 'https://opensource.org/licenses/mit-license.html',
      files: [
        {
          pattern: 'node_modules/weathericons/svg/*.svg',
          formatter: (name) => name.replace(/wi-/i, ''),
        },
      ],
    },
  ],
};
