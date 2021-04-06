import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Grupo } from 'src/app/aplicacao/model/Grupo';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  public displayModal: boolean;

  public nomeGrupo: string = '';

  public header: string = '';

  public registro: Grupo = new Grupo();

  public grupos: Grupo[];

  constructor(private grupoService: GrupoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  private buscarTodos() {
    this.grupoService.buscarTodos().subscribe({
      next: result => {
        console.log(result.entity);
        this.grupos = result.entity;
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => {
      }
    });
  }

  public buscarPorNome() {
    if (this.nomeGrupo !== '') {
      this.grupoService.buscarPorNome(this.nomeGrupo).subscribe({
        next: result => {
          console.log(result.entity);
          this.grupos = result.entity;
        }, error: erro => {
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => {
        }
      });
    } else {
      this.buscarTodos();
    }
  }

  public incluirRegistro() {
    this.header = 'Incluir grupo';
    this.registro = new Grupo();
    this.displayModal = true;
  }

  public editarRegistro(grupo: Grupo) {
    this.header = 'Editar grupo';
    this.registro = new Grupo(grupo);
    this.displayModal = true;
  }

  public verificarAlteracao() {
    if (this.registro.id) {
      this.alterarGrupo();
    } else {
      this.incluirGrupo();
    }
  }

  public alterarGrupo() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.grupoService.atualizar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.grupos = result.entity;
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => {
          this.displayModal = false
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

  public incluirGrupo() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.grupoService.cadastrar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.grupos = result.entity;
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => {
          this.displayModal = false
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

  public excluirRegistro(grupo: Grupo) {
    this.confirmationService.confirm({
      message: `Confirma a exclusão do grupo ${grupo.nome}?`,
      accept: () => {
        this.grupoService.deletar(grupo).subscribe({
          next: result => {
            console.log(result.entity);
            this.grupos = result.entity;
            this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
          }, error: erro => {
            this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
          }, complete: () => {
          }
        });
      }
    });
  }

}
