import {Request, Response, Router} from 'express';

export const offerRouter=Router();

offerRouter
    .get('/',(req:Request,res:Response)=>{
        res.render('offer');
    })

