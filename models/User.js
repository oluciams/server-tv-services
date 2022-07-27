import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';


export const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false    
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false    
    },    
    apartment: {
      type: DataTypes.STRING,
      allowNull: false    
    },  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,   
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false    
    },
});




