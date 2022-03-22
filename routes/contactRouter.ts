import {Request, Response, Router} from 'express';
import {ClientRecord} from "../records/client.record";
import {ValidationError} from "../utils/error";
import {sendMail} from "../utils/mail";

export const contactRouter=Router();


contactRouter
    .get('/',(req:Request,res:Response)=>{
        res.render('contact');
    })
    .post('/',async (req:Request, res:Response) => {
        const {person,problem,phone} = req.body;

        //validation
        if(problem.length>400)throw new ValidationError("Opis nie powinien zawierać więcej niż 400 znaków");
        if(phone.toString()[0]==="0"||
        phone.length!==9)throw new ValidationError("Zły numer telefonu !");

        const obj={
            name_surname:person,
            description:problem,
            phone:req.body.phone
        }

        const client=new ClientRecord(obj);

        try{
            await client.insert();
            await sendMail(person,phone,problem);
        }
        catch (e) {
            throw new Error(e);
        }

        res.send("OK MORDO");
    })

