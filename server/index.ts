import server from './src/app.js';
import { db } from './src/db.js';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

db.sequelize.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
});