# lambda-cdk
Simple demonstration of how to deploy a lambda (with layer) with the AWS CDK and GitHub Actions

# Prerequisites

You'll need a computer with a terminal and Git installed.

You'll need an AWS account.  If you don't have one already, follow the steps [here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) to create one.  Once your account is created, you'll need to configure your local machine with your credentials.  This can be done a number of ways; refer to [configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

You'll need Node.js, npm (installed with node), and the AWS CDK installed to proceed.

1. [Install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs/)
1. [Install the AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) (`npm install -g aws-cdk`)

Confirm that everything is working by running `node --version && npm --version &&  cdk --version` in your terminal.  You should see the following:

```bash
$ node --version && npm --version &&  cdk --version
v18.14.0
9.3.1
2.67.0 (build b6f7f39)
```

It's safe to ignore slight differences in numbering; you're mostly checking to confirm that you get 3 values.

# Prepping your AWS account to work with the CDK

If this is the first time you've used the CDK to make changes to your AWS account, you'll need to run [`cdk bootstrap`](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) to provision resources for the CDK.  You need to do this once for each AWS account you'll be using the CDK to manage.

# Instructions

1. Clone this repo
1. Run `npm install`
1. Run `cdk deploy`

The CDK should deploy a Lambda, Lambda Layer, and an API Gateway.  Among the output should be a URL; visit it in your browser and you should see a greeting!