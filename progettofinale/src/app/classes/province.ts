import { Comune } from "./comune";

export class Province {
    id!:string;
    nome!:string;
    sigla!:string;
    Comune!:Comune

    constructor(){

        this.Comune=new Comune();
    }
}
