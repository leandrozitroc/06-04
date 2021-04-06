import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PerfilService } from '../../perfil/service/perfil.service';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
@Component({
  selector: 'app-home-profissional',
  templateUrl: './home-profissional.component.html',
  styleUrls: ['./home-profissional.component.scss']
})
export class HomeProfissionalComponent implements OnInit {
  public showCliente : any
  constructor(private perfilservice: PerfilService, private storageService: StorageService, private messageService: MessageService) { }

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
