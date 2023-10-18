import { db } from "../../db.js";
import citiesName from "../../Utils/citiesName.js";

interface CityAttributes {
  name: string;
}

const controllPostCities = async (req: any): Promise<CityAttributes[]> => {
  const Cities = db.sequelize.models.Cities;
  const createdCities: CityAttributes[] = [];
  req
  for (const cityName of citiesName) {
    const newCity = await Cities.create({ name: cityName });
    createdCities.push(newCity.toJSON() as CityAttributes);
  }

  return createdCities;
};

export default controllPostCities;
