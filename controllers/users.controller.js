import { User } from '../models/User.js';
import { Building } from '../models/Building.js';
import { Plan } from '../models/Plan.js';

export const getUsers = async (req, res) => {
  try {
    //const users = await User.findAll();
    const users = await User.findAll({ include: [Building, Plan ]});
    res.status(200).json(users);  
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};


export const createUser = async (req, res) =>{
  
  const {body } = req; 
  
    try {
      const duplicateEmail = await User.findOne({
        where: { email: body.email }
      });
      if(duplicateEmail) {
        return res.status(400).json({
          msg:'duplicate Email'
        });
      }     
      const newUser = await User.create(body); 
      await newUser.save();
      res.status(201).json(newUser);

  } catch (error) {
      return res.status(500).json({ message: error.message});
  }  
};

export const  updateUser = async (req, res) => {
  try {  
    const { id } = req.params

    const user = await Building.findOne({
      where: { id },
    })
    user.set(req.body);
    await user.save()
    res.status(200).json(user) 

  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};