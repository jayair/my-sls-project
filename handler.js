'use strict';

module.exports.helloWorld = (event, context, callback) => {
  setTimeout(() => console.log('done timer'), 10000);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // body: `This is a demo app: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
    body: `This is a demo app running in ${process.env.MESSAGE}.`
  };
  
  callback(null, response);
};


