import { Db, ObjectId } from "mongodb";
import {Model} from '../src/core/model'
export type User = {
    // _id?: ObjectId;
    name: string;
    email: string;
    age: number;
};

export class UserModel extends Model<User> {
    constructor(db: Db) {
        super(db, 'users');
    }
}