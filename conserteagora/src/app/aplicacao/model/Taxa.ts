import { Message } from "primeng/api";
import { Grupo } from "./Grupo";
import { Severity, Summary } from "./Message";
import { Servico } from "./Servico";

export class Taxa {
    
    id: number;
    valor: number;
    percentual: number;
    servico: Servico;

    valorPago: number;

    public constructor(init?: Partial<Taxa>) {
        Object.assign(this, init);
    }

    public validarDados() {
        let messages: Message[] = [];
        if (this.valor === null || this.valor === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Valor' não foi preenchido" });
        }
        if (this.percentual === null || this.percentual === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Percentual' não foi preenchido" });
        }
        if (this.servico === null || this.servico === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Serviço' não foi preenchido" });
        }
        return messages;
    }

    public calcularValor() {
        if ( (this.valor !== null && this.valor !== undefined) && (this.percentual !== null && this.percentual !== undefined) ) {
            this.valorPago = this.valor - ((this.valor / 100) * this.percentual);
        }
    }

}