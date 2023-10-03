import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(DB_DEPLOY!, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners: ((sequelize: Sequelize) => void)[] = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, '/models', file));
    modelDefiners.push(modelDefiner);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

export const db = {
  ...sequelize.models,
  conn: sequelize,
};
