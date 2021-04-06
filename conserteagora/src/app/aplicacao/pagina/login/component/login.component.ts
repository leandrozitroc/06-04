import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-fix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioLogin = new UsuarioLogin();

  constructor(private router: Router, private storageService: StorageService, private loginService: LoginService, private messageService: MessageService) { }

  public ngOnInit(): void {
  }

  public realizarLogin() {
    let result: Message[] = this.usuario.autenticarDados();
    if (result.length === 0) {
      this.loginService.autenticarUsuario(this.usuario).subscribe({
        next: result => {
          console.log(result);
          this.storageService.saveUser(result.login, result.token, result.authorities);
          this.router.navigate([result.rota]);
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.error })
        }, complete: () => {
        }
      });
    } else {
      this.messageService.addAll(result);
    }
  }

}
