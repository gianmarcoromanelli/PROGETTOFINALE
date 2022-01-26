import { Comune } from "./comune";
import { Province } from "./province";

export class IndirizzoSedeLegale {

    id!:number;
    via!:string;
    civico!:string;
    cap!:string;
    località!:string;
    comune!:Comune;
    provincia!:Province;
}
