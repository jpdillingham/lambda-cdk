const leftPad = require('left-pad');

const handler = async function (event) {
  console.log(`EVENT: \n${JSON.stringify(event, null, 2)}`);

  return {
    statusCode: 200,
    body: JSON.stringify('hello, world?'),
  };
};

module.exports = {
  handler,
};
