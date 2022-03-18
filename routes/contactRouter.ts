import {Request, Response, Router} from 'express';

export const contactRouter=Router();

contactRouter
    .get('/',(req:Request,res:Response)=>{
        res.render('contact');
    })

