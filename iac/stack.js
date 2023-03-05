/* eslint-disable no-new */
/* eslint-disable no-useless-constructor */
const { Stack } = require('aws-cdk-lib');
const service = require('./service');

class LambdaCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new service.Service(this, 'LambdaCdk');
  }
}

module.exports = { LambdaCdkStack };
