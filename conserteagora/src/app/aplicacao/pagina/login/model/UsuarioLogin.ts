import { Message } from "primeng/api";
import { Severity, Summary } from "src/app/aplicacao/model/Message";

export class UsuarioLogin {

    login: string = '';
	senha: string = '';

    public autenticarDados(): Message[] {
        let message: Message[] = [];
        if (this.login === null || this.login === undefined || this.login === '' ) {
            message.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Login' não foi preenchido" });
        }
        if (this.senha === null || this.senha === undefined || this.senha === '' ) {
            message.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'senha' não foi preenchido" });
        }
        return message;
    }

}