import { Province } from "./province";

export class Comune {

    id!:string;
    nome!:string;
    sigla!:string;
    Provincia!:Province;

    constructor(){

        this.Provincia=new Province();
    }
}
