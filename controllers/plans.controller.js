import { Plan } from '../models/Plan.js';

export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json(plans);  
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

export const createPlan = async (req, res) =>{
  const { monthsFree, label, price, buildingId } = req.body; 

    try {  
      const newPlan = await Plan.create({
        monthsFree,
        label,
        price,
        buildingId     
      }); 
      
      res.status(201).json(newPlan);

  } catch (error) {
      return res.status(500).json({ message: error.message});
  }  
};