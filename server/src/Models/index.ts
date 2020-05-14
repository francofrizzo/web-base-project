import { Sequelize } from "sequelize";
import { User, InitializeUserModel } from "./User";

export { User as UserModel };

const sequelize = new Sequelize("sqlite::memory:");

InitializeUserModel(sequelize);

export const synchronizeDatabase = async () => {
  await sequelize.sync();

  await User.create({
    username: "janedoe",
    name: "Jane",
    surname: "Doe",
    birthday: new Date(1980, 6, 20)
  });
};
