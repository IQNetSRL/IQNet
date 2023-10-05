import { db } from "../../db.js";

interface UserAttributes {
  id: string;
  name: string;
  lastName: string;
  city: string;
  phoneNumber: number;
  emailAddress: string | null;
  consult: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const getUserById = async (id: string): Promise<UserAttributes | null> => {
  const Users = db.sequelize.models.Users;
  const user = await Users.findByPk(id);
  return user ? (user.toJSON() as UserAttributes) : null;
};

export default getUserById;
