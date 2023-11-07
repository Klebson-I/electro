var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from '../utils/connection.js';
import { v4 as uuid } from 'uuid';
export class ClientRecord {
    constructor(obj) {
        var _a;
        this.name_surname = obj.name_surname;
        this.phone = obj.phone;
        this.description = obj.description;
        this.id = (_a = obj.id) !== null && _a !== void 0 ? _a : uuid();
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.execute("insert into `client` values(:id,:name_surname,:phone,:description)", {
                id: this.id,
                name_surname: this.name_surname,
                phone: this.phone,
                description: this.description
            });
        });
    }
}
//# sourceMappingURL=client.record.js.map