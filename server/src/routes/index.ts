import {Express, Request, Response} from 'express';
import authRoutes from './AuthRoutes';
import taskRoutes from './TaskRoutes';

export function registerRoutes(app:Express){

    app.get("/health", (req:Request, res:Response) => {
            res.status(200).json({message: "Server is running properly"});
        })

    app.use('/auth', authRoutes);
    app.use('/task', taskRoutes); 
    
}