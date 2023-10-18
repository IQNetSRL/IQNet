import { Request } from "express";
import { db } from "../../db.js";
import { Op } from "sequelize";

interface CityAttributes {
  id: string;
  name: string;
}

const getAllCities = async (req: Request): Promise<CityAttributes[]> => {
  const Cities = db.sequelize.models.Cities;
  const { name } = req.query;

  if (name) {
    const cities = await Cities.findAll({
      where: {
        fullName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return cities.map((city) => city.toJSON()) as CityAttributes[];
  } else {
    const citiesList = await Cities.findAll();
    return citiesList.map((city) => city.toJSON()) as CityAttributes[];
  }
};

export default getAllCities;
