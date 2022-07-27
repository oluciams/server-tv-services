import { Router } from "express";
import { 
  createBuilding,
  deleteBuilding,
  getBuilding,
  getBuildings,
  updateBuilding,
  getBuildingPlans,
  addBuildingPlan
} from '../controllers/buildings.controller.js';

export const buildingRoutes = Router()

buildingRoutes.get('/buildings', getBuildings);
buildingRoutes.post('/buildings', createBuilding);
buildingRoutes.put('/buildings/:id', updateBuilding);
buildingRoutes.delete('/buildings/:id',deleteBuilding);
buildingRoutes.get('/buildings/:id', getBuilding);
buildingRoutes.get('/buildings/:id/plans', getBuildingPlans);
buildingRoutes.post('/buildings/:id/plans', addBuildingPlan);