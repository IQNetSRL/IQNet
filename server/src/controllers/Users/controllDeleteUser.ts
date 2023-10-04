import { Model, Sequelize } from "sequelize";
import { db } from "../../db.js";

const controllDeleteUser = async (id: string) => {
  const Users = db.sequelize.models.Users;
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("User not found.");
  }
  await user.destroy();
  return { message: "User deleted successfully." };
};

export default controllDeleteUser;
