import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";
import Users from "./models/Users";

dotenv.config();

const sequelize = new Sequelize({
  database: "IQNet",
  username: "postgres",
  password: "francocodea",
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
