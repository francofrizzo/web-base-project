import { Model, DataTypes, Sequelize } from "sequelize";

export class User extends Model {
  public id!: number;
  public username!: string;
  public name!: string;
  public surname!: string;
  public birthday!: Date;

  public preferredName!: string | null;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const InitializeUserModel = (sequelize: Sequelize) => User.init({
  username: DataTypes.STRING,
  name: DataTypes.STRING,
  surname: DataTypes.STRING,
  birthday: DataTypes.DATE
}, {
  modelName: "user",
  sequelize,
});
