import { Model, Column, Table, PrimaryKey, DataType, Sequelize } from 'sequelize-typescript';
import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db';

// const sequelize = new Sequelize('mysql::memory:');

 interface IUserAccount {
  name: string,
  email: string,
  password: string,
  number: string,
  id?: string,
 }

@Table({tableName: 'users'})
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


// User.init({
//   name: {
//     type: DataType.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   },
//   id: {
//     type: DataType.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,
//   },
//   number: {
//     type: DataType.STRING,
//   },
//   password: {
//     type: DataType.STRING,
//     allowNull: false,
//   },
// }, 
//   {
//     modelName: 'user',
//     sequelize: sequelize
//   }
// )


