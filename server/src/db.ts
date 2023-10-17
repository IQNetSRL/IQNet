import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";
import Users from "./models/Users";

dotenv.config();

const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DB;

const sequelize = new Sequelize({
  database: database,
  username: user,
  password: password,
  host: "localhost",
  dialect: "postgres",
  logging: false,
  native: false,
});

const modelDefiners = [Users];

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

export const db = {
  sequelize,
  ...sequelize.models,
};
