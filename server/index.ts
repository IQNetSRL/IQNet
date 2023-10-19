import server from "./src/app.js";
import { db } from "./src/db.js";
import * as dotenv from "dotenv";
import controllPostCities from "./src/controllers/Cities/controllPostCities.js";

dotenv.config();

const port = process.env.PORT;

db.sequelize.sync({ force: true }).then(async () => {
  await controllPostCities();
  server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
});
