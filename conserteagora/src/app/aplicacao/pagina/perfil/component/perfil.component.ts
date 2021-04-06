import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { PerfilService } from '../service/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public view: number = 1;

  public usuario: UsuarioCadastro = new UsuarioCadastro();

  public showCliente : any

  constructor(private perfilService: PerfilService, private storageService: StorageService, private messageService: MessageService) { }

  public viewAlterarDados() {
    this.view = 1;
  }

  public viewTrocarSenha() {
    this.view = 2;
  }

  ngOnInit(): void {
    this.perfilService.infoUsuario(this.storageService.getLogin()).subscribe({
      next: result => {
        console.log(result);
        this.showCliente = result[0]
        console.log(this.showCliente)
        this.usuario = new UsuarioCadastro(result.entity);
        this.usuario.formatarData();
      }, error: erro => {
        console.log(erro);
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.error });
      }, complete: () => {
      }
    });
  }

  public alterarCadastro() {
    let message: Message[] = this.usuario.validarDados();
    if (message.length === 0) {
      this.perfilService.atualizarCadastro(this.usuario).subscribe({
        next: result => {
          console.log(result);
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

  public alterarSenha() {
    let message: Message[] = this.usuario.validarNovaSenha();
    if (message.length === 0) {
      this.perfilService.atualizarSenha(this.usuario).subscribe({
        next: result => {
          console.log(result);
          this.usuario = result.entity;
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

}
