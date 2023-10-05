import { Request } from "express";
import { db } from "../../db.js";
import { Op } from "sequelize";

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

const getAllUsers = async (req: Request): Promise<UserAttributes[]> => {
  const Users = db.sequelize.models.Users;
  const { name } = req.query;

  if (name) {
    const users = await Users.findAll({
      where: {
        fullName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return users.map((user) => user.toJSON()) as UserAttributes[];
  } else {
    const usersList = await Users.findAll();
    return usersList.map((user) => user.toJSON()) as UserAttributes[];
  }
};

export default getAllUsers;
