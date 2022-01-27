import { Clienti } from "./clienti";
import { Stato } from "./stato";

export class Fatture {
    id!: number;
    data!: number;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!:Stato;
    cliente!:Clienti;
    
    dataInserimento!:string;
    dataUltimoContatto!:string;
    fatturatoAnnuale!:string;
   content!: Fatture[];

    constructor(){

        this.stato=new Stato();
        this.cliente=new Clienti();
    }
}
