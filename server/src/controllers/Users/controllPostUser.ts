import { Request } from "express";
import { db } from "../../db.js";

interface UserAttributes {
  id: string;
  name: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  emailAddress: string | null;
  address: string | null;
  consult: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const controllPostUser = async (req: Request): Promise<UserAttributes> => {
  const { name, lastName, phoneNumber, city, emailAddress, address, consult } = req.body;
  const Users = db.sequelize.models.Users;

  const [newUser] = await Users.findOrCreate({
    where: {
      name,
      lastName,
      emailAddress,
      phoneNumber,
      address,
      city,
      consult,
    },
  });

  return newUser.toJSON() as UserAttributes;
};

export default controllPostUser;
