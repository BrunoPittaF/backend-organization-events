import { Model, Column, Table, PrimaryKey, DataType } from 'sequelize-typescript';
import { sequelize } from '../db/db';


 interface IUserAccount {
  name: string,
  email: string,
  password: string,
  number: string,
  id?: string,
 }

@Table({tableName: 'user'})
export class User extends Model<IUserAccount> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id!: string;

  @Column({
    allowNull: false,
  })
  name!: string;

  @Column({
    unique: true,
    allowNull: false,

  })
  email!: string;

  @Column({
    allowNull: false,
  })
  password!: string;

  @Column({
    allowNull: true,
  })
  number!: string;
}


User.init({
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  },
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  number: {
    type: DataType.STRING,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
}, 
  {
    sequelize,
    modelName: 'user'
  }
)


User.sync({ force: true })
  .then(() => {
    console.log('User table created successfully!');
  })
  .catch((err) => {
    console.error('Error creating user table:', err);
  });