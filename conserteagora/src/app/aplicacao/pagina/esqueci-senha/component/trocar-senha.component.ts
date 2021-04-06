import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { TrocarSenhaService } from '../service/trocar-senha.service';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.scss']
})
export class TrocarSenhaComponent implements OnInit {

  public view: number = 1;

  public usuario: UsuarioCadastro= new UsuarioCadastro();

  constructor(private router: Router, private trocarSenhaService: TrocarSenhaService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public validarCadastro() {
    let message: Message[] = this.usuario.validarDadosTrocaSenha();
    if (message.length === 0) {
      this.trocarSenhaService.autenticarUsuario(this.usuario).subscribe({
        next: result => {
          this.view++;
          this.usuario = new UsuarioCadastro(result.entity);
          this.messageService.add({ severity: Severity.INFO, summary: Summary.INFO, detail: result.message });
        }, error: erro => {
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }
      });
    } else {
      this.messageService.addAll(message);
    }
    
  }

  public confirmarNovaSenha() {
    let message: Message[] = this.usuario.validarSenha();
    if (message.length === 0) {
      this.trocarSenhaService.trocarSenha(this.usuario).subscribe({
        next: result => {
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
          this.router.navigate(['/login']);
        }, error: erro => {
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

}
