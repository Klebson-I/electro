import {pool} from '../utils/connection';
import {v4 as uuid} from 'uuid';
import {clientRecordObj} from "../utils/types";
import {ValidationError} from "../utils/error";

export class ClientRecord implements clientRecordObj{

    name_surname:string;
    phone:number;
    description:string;
    id?:string;

    constructor(obj : clientRecordObj) {
        this.name_surname=obj.name_surname;
        this.phone=obj.phone;
        this.description=obj.description;
        this.id=obj.id??uuid();
    }

    async insert () {
        await pool.execute("insert into `client` values(:id,:name_surname,:phone,:description)",{
                id:this.id,
                name_surname:this.name_surname,
                phone:this.phone,
                description:this.description
        })
    }
}