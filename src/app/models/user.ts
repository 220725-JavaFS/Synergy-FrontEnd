import { Rating } from "./rating";
import { Comment } from "./comment";

export class User {
    constructor(public id:number,
                public firstName:String,
                public lastName:String,
                public email:String, 
                public password:String,
                public comments:Array<Comment>,
                public ratings:Array<Rating>){}
}