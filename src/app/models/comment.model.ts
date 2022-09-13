import { Users } from "./users";

export class Comment {
    constructor(public id:number, public users:Users, public gameId:number, 
        public comment:String){}
}
