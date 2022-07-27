import { Router } from 'express';
import { createPlan, getPlans } from '../controllers/plans.controller.js'

export const plansRoutes = Router();

plansRoutes.get('/plans', getPlans);
plansRoutes.post('/plans', createPlan);
plansRoutes.put('/plans/:id');
plansRoutes.delete('/plans/:id');
plansRoutes.get('/plans/:id');