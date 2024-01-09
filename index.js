const express = require('express');
const createConnection = require('./config/db');
const saveRoute = require('./routes/save');
const downloadRoute = require('./routes/download');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const connection = createConnection();

const app = express();
app.use(express.json());
app.use('/download', downloadRoute(connection));
app.use('/save', saveRoute(connection)); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
