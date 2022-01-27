import { Province } from "./province";

export class Comune {

    id!:string;
    nome!:string;
    sigla!:string;
    provincia!:Province;

    constructor(){

        this.provincia=new Province();
    }
}
