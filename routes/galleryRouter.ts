import {Request, Response, Router} from 'express';

export const galleryRouter=Router();

galleryRouter
    .get('/',(req:Request,res:Response)=>{
        res.render('gallery');
    })

