import { Users } from "./users";

export class Comment {
    constructor(public id:number, public user:Users, public gameId:number, 
        public comment:String){}
}
