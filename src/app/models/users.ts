export class Users {
    public id:number;
    public firstName:String
    public lastName:String
    public email:String
    public username:String
    public password:String

    constructor(id:number, firstName:String, lastName:String, email:String, username:String, password:String){
        this.id=id,
        this.firstName=firstName,
        this.lastName=lastName,
        this.email=email,
        this.username=username,
        this.password=password
    }
}
