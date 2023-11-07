var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { ClientRecord } from "../records/client.record";
import { ValidationError } from "../utils/error";
export const contactRouter = Router();
contactRouter
    .get('/', (req, res) => {
    res.render('contact');
})
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { person, problem, phone } = req.body;
    //validation
    if (problem.length > 400)
        throw new ValidationError("Opis nie powinien zawierać więcej niż 400 znaków");
    if (phone.toString()[0] === "0" ||
        phone.length !== 9)
        throw new ValidationError("Zły numer telefonu !");
    const obj = {
        name_surname: person,
        description: problem,
        phone: req.body.phone
    };
    const client = new ClientRecord(obj);
    try {
        yield client.insert();
        //await sendMail(person,phone,problem);
    }
    catch (e) {
        throw new Error(e);
    }
    res.render('send');
}));
//# sourceMappingURL=contactRouter.js.map