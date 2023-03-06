import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';


export const sequelize = new Sequelize({
  host: 'localhost',
  port: 3006,
  database: 'mydb',
  dialect: 'mysql',
  username: 'root',
  password: 'rootPass1234',
  models: [User]
});

sequelize.sync();
