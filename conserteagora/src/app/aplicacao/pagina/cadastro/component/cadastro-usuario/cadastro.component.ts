import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EnumTipoAcesso, EnumTipoAcessoFactory } from 'src/app/aplicacao/model/EnumTipoAcesso';
import { JwtResponse } from 'src/app/aplicacao/model/JwtResponse';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { CadastroService } from '../../service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public view: number = 1;

  public novoUsuario: UsuarioCadastro = new UsuarioCadastro();

  constructor(private router: Router, private messageService: MessageService, private storageService: StorageService, private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  public strTituloCadastro() {
    if (this.novoUsuario.id_permissao === null || this.novoUsuario.id_permissao === undefined) {
      return "Cadastro";
    } else {
      return EnumTipoAcessoFactory.obterDescricaoEnum(this.novoUsuario.id_permissao);
    }
  }

  public voltar() {
    this.view--;
    if (this.view === 1) {
      this.novoUsuario = new UsuarioCadastro();
    }
  }

  public cliente() {
    this.view++;
    this.novoUsuario.id_permissao = EnumTipoAcesso.CLIENTE;
  }

  public profissional() {
    this.view++;
    this.novoUsuario.id_permissao = EnumTipoAcesso.PROFISSIONAL;
  }

  public validarCadastro() {
    if (this.validarDados()) {
      this.view++;
    }
  }

  private validarDados(): boolean {
    let messages = this.novoUsuario.validarDados();
    if (messages.length > 0) {
      this.messageService.addAll(messages);
      return false;
    }
    return true;
  }

  public confirmarCadastro() {
    if (this.validarTrocaSenha()) {
      this.cadastroService.cadastrarNovoUsuario(this.novoUsuario).subscribe({
        next: result => {
          let jwt: JwtResponse = result.entity;
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: "Cadastrado com sucesso" })
          //this.storageService.saveUser(jwt.login, jwt.token, jwt.authorities);
          this.router.navigate(['/login']);
        }, error: erro => {

          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error })
          this.router.navigate(['/login']);
        }, complete: () => {

          this.router.navigate(['/login']);
        }
      });
    }
  }

  private validarTrocaSenha(): boolean {
    let messages = this.novoUsuario.validarSenha();
    if (messages.length > 0) {
      this.messageService.addAll(messages);
      return false;
    }
    return true;
  }

  public login() {
    this.router.navigate(['/login']);
  }

}
