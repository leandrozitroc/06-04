import { NodeWithI18n } from "@angular/compiler";
import { Message } from "primeng/api";
import { EnumTipoAcesso } from "src/app/aplicacao/model/EnumTipoAcesso";
import { LoginComponent } from "../pagina/login/component/login.component";
import { Severity, Summary } from "./Message";
import { Utils } from "./Utils";

export class UsuarioCadastro {

    private regex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    id_usuario: number;
    txt_nome: string = '';
    txt_cpf: string = '';
    dtNascimento: Date;
    txt_email: string = '';
    txt_senha: string = '';
    confirmarSenha: string = '';
    novaSenha = '';
    txt_telefone: string = '';
    txt_endereco: string = '';
    id_permissao: EnumTipoAcesso;
    fl_ativo: boolean;

    public constructor(init?: Partial<UsuarioCadastro>) {
        Object.assign(this, init);
    }

    validarDados(): Message[] {
        let messages: Message[] = [];
        if ( this.txt_nome === null ||  this.txt_nome === undefined || this.txt_nome === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O c  this.txt_nome' não foi preenchido" });
        }
        if (this.txt_cpf === null || this.txt_cpf === undefined || this.txt_cpf === '' || !Utils.cpfValido(this.txt_cpf)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Cpf' não foi preenchido ou não é válido" });
        }
        if (this.dtNascimento === null || this.dtNascimento === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Data de nascimento' não foi preenchido" });
        }
        if (this.txt_endereco === null || this.txt_endereco === undefined || this.txt_endereco === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'endereço' não foi preenchido" });
        }
        if (this.txt_telefone === null || this.txt_telefone === undefined || this.txt_telefone === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'telefone' não foi preenchido" });
        }
        if (this.txt_email === null || this.txt_email === undefined || this.txt_email === '' || !this.regex.test(this.txt_email)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo login não foi preenchido ou está com informação invalida" });
        }
        return messages;
    }

    validarInclusaoDadosAdm(): Message[] {
        let messages: Message[] = [];
        if (  this.txt_nome === null ||  this.txt_nome === undefined || this.txt_nome === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O c  this.txt_nome' não foi preenchido" })
        }
        if (this.txt_email === null || this.txt_email === undefined || this.txt_email === '' || !this.regex.test(this.txt_email)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo login não foi preenchido ou está com informação invalida" });
        }
        if (this.txt_cpf !== null && this.txt_cpf !== undefined && this.txt_cpf !== '' && !Utils.cpfValido(this.txt_cpf)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Cpf' não foi preenchido ou não é válido" });
        }
        if (messages.length === 0) {
            return this.validarSenha();
        } else {
            return messages
        }
    }

    validarAlteracaoDadosAdm(): Message[] {
        let messages: Message[] = [];
        if (  this.txt_nome === null ||  this.txt_nome === undefined || this.txt_nome === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O c  this.txt_nome' não foi preenchido" })
        }
        if (this.txt_email === null || this.txt_email === undefined || this.txt_email === '' || !this.regex.test(this.txt_email)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo login não foi preenchido ou está com informação invalida" });
        }
        if (this.dtNascimento !== null && this.dtNascimento !== undefined && this.validarDataNascimento() ) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Data de nascimento' está invalido" });
        }
        return messages
    }

    validarDadosTrocaSenha(): Message[] {
        let messages: Message[] = [];
        if (this.txt_telefone === null || this.txt_telefone === undefined || this.txt_telefone === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'telefone' não foi preenchido" })
        }
        if (this.txt_email === null || this.txt_email === undefined || this.txt_email === '' || !this.regex.test(this.txt_email)) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo login não foi preenchido ou está com informação invalida" });
        }
        return messages;
    }

    validarSenha(): Message[] {
        let messages: Message[] = [];
        if (this.txt_senha === null || this.txt_senha === undefined || this.txt_senha === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Senha' não foi preenchido" })
        }
        if (this.confirmarSenha === null || this.confirmarSenha === undefined || this.confirmarSenha === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Confirma senha' não foi preenchido" });
        }
        if (this.txt_senha === this.confirmarSenha || this.confirmarSenha === this.txt_senha) {
        } else {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "Confirma senha não confere" });
        }
        return messages;
    }

    validarNovaSenha(): Message[] {
        let messages: Message[] = [];
        if (this.txt_senha === null || this.txt_senha === undefined || this.txt_senha === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Senha' não foi preenchido" })
        }
        if (this.novaSenha === null || this.novaSenha === undefined || this.novaSenha === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Nova senha' não foi preenchido" });
        }
        if (this.confirmarSenha === null || this.confirmarSenha === undefined || this.confirmarSenha === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Confirma senha' não foi preenchido" });
        }

        if (this.novaSenha === this.confirmarSenha || this.confirmarSenha === this.novaSenha) {
        } else {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "Confirma senha não confere" });
        }
        return messages;
    }

    formatarData() {
        if (this.dtNascimento !== null && this.dtNascimento !== undefined) {
            let novaData: Date = new Date();
            let value: string[] = this.dtNascimento.toString().split("-");
            novaData.setFullYear(Number.parseInt(value[0]), Number.parseInt(value[1]) - 1, Number.parseInt(value[2]));
            this.dtNascimento = novaData;
        }
    }

    private validarDataNascimento() {
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        this.dtNascimento.setHours(0, 0, 0, 0);
        if (this.dtNascimento >= now || this.dtNascimento.getFullYear() > (now.getFullYear() - 18)) {
            return true;
        } else {
            return false;
        }
    }

}
