import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';


const sequelize = new Sequelize({
  host: 'localhost',
  port: 3006,
  database: 'mydb',
  dialect: 'mysql',
  username: 'root',
  password: 'rootPass1234',
  models: [User]
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
}).catch((err) => {
  console.error('Error synchronizing database:', err);
});

export { sequelize }; 



