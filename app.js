import express from 'express';
import cors from 'cors';
import { usersRoutes } from './routes/users.routes.js';
import { buildingRoutes } from './routes/building.routes.js'
import { plansRoutes } from './routes/plans.routes.js';

const app = express();


app.use(express.json());
app.use(cors());
app.use(usersRoutes, buildingRoutes, plansRoutes);


export default app;