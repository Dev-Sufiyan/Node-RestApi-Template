const express = require('express');
const saveRoute = require('../routes/save');
const downloadRoute = require('../routes/download');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger-output.json')
const sequelize = require('../config/sequelize'); 

const app = express();
app.use(express.json());

// Use the route without invoking the function
app.use('/save', saveRoute);
app.use('/download', downloadRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error.message);
  }
}

syncDatabase();
