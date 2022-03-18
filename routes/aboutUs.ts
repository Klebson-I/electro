import {Request, Response, Router} from 'express';

export const aboutUsRouter=Router();

aboutUsRouter
    .get('/',(req:Request,res:Response)=>{
        res.render('aboutUs');
    })

