const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'FMS API',
      description: 'A File Management System facilitating seamless storage and retrieval of BOB files within a secure database environment'
    },
    host: 'localhost:3000'
  };
const outputFile = './swagger-output.json';

const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('../script/index.js');
});
