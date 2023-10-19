import { DataTypes, Model, Sequelize } from "sequelize";

class Users extends Model {
  public id!: string;
  public name!: string;
  public lastName!: string;
  public city!: string;
  public phoneNumber!: string;
  public emailAddress!: string | null;
  public address!: string | null;
  public consult!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;
}

export default (sequelize: Sequelize) => {
  Users.init(
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
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      consult: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Users };
