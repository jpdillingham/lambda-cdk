#!/usr/bin/env node
/* eslint-disable no-new */

const fs = require('fs');
const cdk = require('aws-cdk-lib');
const { LambdaCdkStack } = require('./stack');

// prepare the layer
try {
  if (fs.existsSync('layer')) {
    console.log('layer exists. deleting.');
    fs.rmSync('layer', { recursive: true, force: true });
  }

  console.log('creating layer directory structure');
  fs.mkdirSync('layer/nodejs/node_modules', { recursive: true });

  console.log('copying node_modules to layer');
  fs.cpSync('node_modules', 'layer/nodejs/node_modules', { recursive: true });
} catch (err) {
  console.error(err);
  console.error('unable to copy node_modules to the layer destination');
  throw err;
}

const app = new cdk.App();
new LambdaCdkStack(app, 'LambdaCdkStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
