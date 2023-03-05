#!/usr/bin/env node
/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const { execSync } = require('child_process');
const cdk = require('aws-cdk-lib');
const { LambdaCdkStack } = require('./stack');

// the lambda layer is expecting a zip file with a root folder 'nodejs'
// containing 'node_modules', and the zip needs to be under ~200mb unzipped
// we'll use npm to create the structure and omit any dev dependencies
// note that we'll need to refer to the '.layer' directory in the stack config
console.log('⏳  Updating layer dependencies...\n');
fs.mkdirSync('./.layer/nodejs', { recursive: true });
fs.copyFileSync('package.json', './.layer/nodejs/package.json');
fs.copyFileSync('package-lock.json', './.layer/nodejs/package-lock.json');
execSync('npm install --omit=dev --prefix ./.layer/nodejs', { stdio: 'inherit' });
console.log('\n✨  Layer prepped!');

const app = new cdk.App();
new LambdaCdkStack(app, 'LambdaCdkStack', {});
