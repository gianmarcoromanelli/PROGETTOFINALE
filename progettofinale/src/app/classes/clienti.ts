import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";
import { TipiCliente } from "./tipi-cliente";

export class Clienti {
    id!: number;
    ragioneSociale!: string;
    partitaIva !: string;
    email!: string;
    telefono!: number;
    nomeContatto!:string;
    cognomeContatto!:string;
    tipoCliente!:TipiCliente;
    indirizzoSedeOperativa!:IndirizzoSedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    pec!:string;
    dataInserimento!:string;
    dataUltimoContatto!:string;
    fatturatoAnnuale!:string;
    emailContatto!:string;

    constructor(){

        this.indirizzoSedeOperativa=new IndirizzoSedeOperativa();
        this.indirizzoSedeLegale=new IndirizzoSedeLegale();
    }
            
            
            
}
