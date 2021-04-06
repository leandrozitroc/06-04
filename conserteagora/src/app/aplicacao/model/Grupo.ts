import { Message } from "primeng/api";
import { Severity, Summary } from "./Message";

export class Grupo {
    id: number;
    nome: string = '';
    descricao: string = '';

    public constructor(init?: Partial<Grupo>) {
        Object.assign(this, init);
    }

    public validarDados() {
        let messages: Message[] = [];
        if (this.nome === null || this.nome === undefined || this.nome === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Nome do grupo' não foi preenchido" });
        }
        if (this.descricao === null || this.descricao === undefined || this.descricao === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'descricao' não foi preenchido" });
        }
        return messages;
    }

}