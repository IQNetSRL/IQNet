import { DataTypes, Model, Sequelize } from "sequelize";

class Cities extends Model {
  public id!: string;
  public name!: string;
}

export default (sequelize: Sequelize) => {
  Cities.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cities",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Cities };