/* eslint-disable import/no-extraneous-dependencies */
const { Construct } = require('constructs');
const apigateway = require('aws-cdk-lib/aws-apigateway');
const lambda = require('aws-cdk-lib/aws-lambda');
const { RemovalPolicy } = require('aws-cdk-lib');

class Service extends Construct {
  constructor(scope, id) {
    super(scope, id);

    const layer = new lambda.LayerVersion(this, 'LambdaCdkLayer', {
      removalPolicy: RemovalPolicy.DESTROY,
      code: lambda.Code.fromAsset('.layer'),
    });

    const handler = new lambda.Function(this, 'LambdaCdk', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('src'),
      handler: 'index.handler',
      layers: [layer],
    });

    const api = new apigateway.RestApi(this, 'lambda-cdk-api', {
      restApiName: 'Lambda CDK Service',
    });

    const getLambdaIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
    });

    api.root.addMethod('GET', getLambdaIntegration); // GET /
  }
}

module.exports = { Service };
