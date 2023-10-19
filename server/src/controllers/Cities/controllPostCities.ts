import { db } from "../../db.js";
import citiesName from "../../Utils/citiesName.js";

interface CityAttributes {
  name: string;
}
let initialized = false;

const initializeCities = async () => {
  if (!initialized) {
    const Cities = db.sequelize.models.Cities;
    const createdCities: CityAttributes[] = [];

    for (const cityName of citiesName) {
      const [newCity, created] = await Cities.findOrCreate({
        where: { name: cityName },
        defaults: { name: cityName },
      });

      if (created) {
        createdCities.push(newCity.toJSON() as CityAttributes);
      }
    }

    initialized = true;
  }
};

const controllPostCities = async (): Promise<CityAttributes[]> => {
  initializeCities();

  return [];
};

export default controllPostCities;
