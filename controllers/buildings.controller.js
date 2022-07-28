import { Building } from '../models/Building.js'
import { Plan } from '../models/Plan.js';

export const  getBuildings = async (req, res) => {
  try {  
    const buildings = await Building.findAll({ include: Plan });

    res.status(200).json(buildings);    
  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};

export const  getBuilding = async (req, res) => {
  try {
    const { id } = req.params
    const building = await Building.findOne({
      where: {
        id
      }
    });

    if(!building)
      return res.status(404).json({message: "Building does not exists"})

    res.status(200).json(building); 

  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};


export const  getBuildingPlans = async (req, res) => {
  try {

    Building.findByPk(req.params.id).then( building => {
      building.getPlans({ attibutes: ['label', 'price']}).then(plans => {
        res.json(plans)
      })
    })

  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};

export const  createBuilding = async (req, res) => {

  const { name, address, city, state, postal } = req.body; 
  
  try { 

    const newBuilding = await Building.create({
      name,
      address,
      city,
      state,
      postal    
    });
    
    res.status(201).json(newBuilding);

  } catch (error) {
      return res.status(500).json({ message: error.message});
  }
};

export const  addBuildingPlan = async (req, res) => {

  try { 
    const { id } = req.params;
    const building = await Building.findOne({where: { id } });   
    
    const { planId } = req.body;
    const plan = await Plan.findOne({ where: { id: planId } }); 
    const buildingPlan = await building.addPlan(plan);
    
    res.status(201).json(buildingPlan);

  } catch (error) {
      return res.status(500).json({ message: error.message});
  }
};

export const  updateBuilding = async (req, res) => {
  try {
    
    const { id } = req.params
    const { name, address, city, state, postal } = req.body; 

    const building = await Building.findByPk(id)
    building.name = name
    building.address = address
    building.city = city
    building.state = state
    building.postal = postal

    await building.save()
    res.status(200).json(building) 

  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};

export const  deleteBuilding = async (req, res) => {
  try {
    const { id } = req.params
    await Building.destroy({
      where: {
        id,
      }
    }) 
    res.sendStatus(204)  
  } catch (error) {
    return res.status(500).json({ message: error.message});  
  }
};

