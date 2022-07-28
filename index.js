import app from './app.js';
import { sequelize } from './database/database.js';

async function conectionPort() {
  try {
    await sequelize.sync({alter: true })  
    app.listen(3000);
    console.log('Server is listening on port', 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
}

conectionPort();