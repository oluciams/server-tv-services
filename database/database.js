import Sequelize from 'sequelize';


//export const sequelize = new Sequelize('postgres://user::5432/megatvdb')

export const sequelize = new Sequelize(
  'megatv',
  'postgres', 
  '1234',
  {
  host: 'localhost',
  dialect: 'postgres',
 
})
