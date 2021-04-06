import { Message } from "primeng/api";
import { Grupo } from "./Grupo";
import { Severity, Summary } from "./Message";
import { Taxa } from "./Taxa";

export class Servico {

    id: number;
    nome: string = '';
    descricao: string = '';
    grupo: Grupo;

    public constructor(init?: Partial<Servico>) {
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
        if (this.grupo === null || this.grupo === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Grupo' não foi selecionado" });
        }

        return messages;
    }
}
