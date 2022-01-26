import { Comune } from "./comune";
import { Province } from "./province";

export class IndirizzoSedeOperativa {
    id!:number;
    via!:string;
    civico!:string;
    cap!:string;
    località!:string;
    comune!:Comune
    provincia!:Province
}
