import { Users } from "./users";

export class Rating {
    constructor(public id:number, public users:Users, public gameId:number, 
        public rating:number){}
    
}
