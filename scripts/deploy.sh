#! /bin/bash
#
# Deploy the library accurately
./scripts/install.sh

node ./scripts/build.js

node ./scripts/build_docs.js

cp package.json build/package.json
cp README.md build/README.md

cd build ;
ls ;

yarn publish;