/* eslint-disable no-new */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-extraneous-dependencies */
const { Stack } = require('aws-cdk-lib');
const service = require('./service');

class LambdaCdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new service.Service(this, 'LambdaCdk');
  }
}

module.exports = { LambdaCdkStack };
