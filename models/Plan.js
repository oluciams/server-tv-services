import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Building } from './Building.js';
import { User } from './User.js';

export const Plan = sequelize.define('plans', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  monthsFree: {
    type: DataTypes.INTEGER,
    allowNull: false    
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false    
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false    
  }
});

Building.belongsToMany(Plan, { through: 'Building_Plans' });
Plan.belongsToMany(Building, { through: 'Building_Plans' });

Plan.hasMany(User, {
  foreinKey: 'planId',
  sourceKey: 'id'
});

User.belongsTo(Plan, {
  foreinKey: 'planId',
  targetId: 'id'
});

