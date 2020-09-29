'use strict';

const test = require("test-package");
console.log(test);

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // body: `This is a demo app: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
    body: test.testImport()
  };
  
  callback(null, response);
};


