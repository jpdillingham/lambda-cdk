/* eslint-disable no-useless-constructor */
const { Stack, Duration } = require('aws-cdk-lib');

class LambdaCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkTestQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { LambdaCdkStack };
