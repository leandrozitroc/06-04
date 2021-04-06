import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from "@angular/material/card"
import { MessageService } from 'primeng/api';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { PerfilService } from '../../perfil/service/perfil.service';
import {Http} from 'src/app/aplicacao/service/http/Http'

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss']
})
export class HomeClienteComponent implements OnInit {
  public showCliente : any

  constructor(private perfilservice: PerfilService, private storageService: StorageService, private messageService: MessageService, private http: HttpClient) { }

  ngOnInit(): void {
    this.perfilservice.infoUsuario(this.storageService.getLogin()).subscribe({
      next: result => {
        console.log(result)
        this.showCliente = result[0]
        console.log(this.showCliente.txt_nome)



      }, error: erro => {
        console.log(erro);
        this.messageService.add({ detail: erro.error.error });
      }, complete: () => {
      }
    });
  }

}
