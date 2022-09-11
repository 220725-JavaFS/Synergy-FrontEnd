import { Rating } from "./rating.model";
import { Comment } from "./comment.model";

export class User {
    constructor(public id:number, public firstName:String, public lastName:String, public email:String, 
        public password:String, public comments:Array<Comment>, public ratings:Array<Rating>){}
}
