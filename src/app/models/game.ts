// export interface Game {
//     id: number;
//     category: string;
//     name: string;
//     summary: string;
// }

// // url: string;
// export interface APIResponse<T> {
//     results: Array<T>;
// }

export class Game {
    constructor(public id:number,
               public category:string,
               public name:string, 
               public summary:string){}
    
}