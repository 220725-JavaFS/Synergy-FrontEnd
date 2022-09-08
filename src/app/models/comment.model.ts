export class Comment {
    public visible:boolean = false;
    constructor(public id:number, public userId:number, public gameId:number, 
        public comment:String){}

    setVisible(visible: boolean){
        this.visible = visible;
    }
}
