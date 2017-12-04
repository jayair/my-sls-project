'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `This is a new feature: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
  };

  callback(null, response);
};

