import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from './User.js'


export const Building = sequelize.define('buildings', {
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
  address: {
    type: DataTypes.STRING,
    allowNull: false    
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false    
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false    
  },
  postal: {
    type: DataTypes.INTEGER,
    allowNull: false    
  } 
});

Building.hasMany(User, {
  foreinKey: 'buildingId',
  sourceKey: 'id'
});

User.belongsTo(Building, {
  foreinKey: 'buildingId',
  targetId: 'id'
});


