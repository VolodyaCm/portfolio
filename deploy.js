/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const { SERVER_ALIAS, DEPLOY_PATH } = process.env;

const ignoreFilesArr = fs
  .readFileSync(path.resolve(__dirname, './.deployignore'))
  .toString()
  .split('\n')
  .filter((e) => e);

const files = fs
  .readdirSync(path.resolve(__dirname, './'))
  .filter((f) => !ignoreFilesArr.includes(f))
  .join(' ');

(function deploy() {
  execSync(`
  if test -f "build.zip"; then
    rm "build.zip"
  fi
  zip -r ./build.zip ${files}
  scp ./build.zip ${SERVER_ALIAS}:${DEPLOY_PATH}
  ssh ${SERVER_ALIAS} 'sh ${DEPLOY_PATH}/deploy.sh'
  rm build.zip
  `);
})();
