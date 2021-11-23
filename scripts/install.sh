#! /bin/bash
#
# Run build

# Clean up old build
rm -rf build 

# # Install node_modules
yarn --frozen-lockfile

# # Clone non-modules
function clone() {
  if [ ! -d node_modules/$1 ]
  then
    rm -rf node_modules/$1 ; mkdir node_modules/$1
    git clone $2 node_modules/$1
  fi
}

clone anticons https://github.com/ant-design/ant-design-icons ;

clone fontawesome https://github.com/FortAwesome/Font-Awesome.git ;

clone typeicons https://github.com/stephenhutchings/typicons.font.git ;

clone githubicons https://github.com/primer/octicons.git ;

clone gameicons https://github.com/delacannon/game-icons-inverted.git ;

clone deviceicons https://github.com/vorillaz/devicons.git ;

clone vscode https://github.com/microsoft/vscode-codicons.git ;

clone cssgo https://github.com/astrit/css.gg.git ;

clone boxicons https://github.com/atisawd/boxicons.git ;

clone icomoon https://github.com/Keyamoon/IcoMoon-Free.git ;

clone ionicons https://github.com/ionic-team/ionicons.git ;

clone weathericons https://github.com/erikflowers/weather-icons.git ;
