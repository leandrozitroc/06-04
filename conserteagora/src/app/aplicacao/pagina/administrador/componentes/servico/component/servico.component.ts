import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, SelectItem } from 'primeng/api';
import { Grupo } from 'src/app/aplicacao/model/Grupo';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { Servico } from 'src/app/aplicacao/model/Servico';
import { GrupoService } from '../../grupo/service/grupo.service';
import { TaxaService } from '../../taxa/service/taxa.service';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  public displayModal: boolean;

  public nomeServico: string = '';

  public header: string = '';

  public registro: Servico = new Servico();

  public servicos: Servico[];

  public listGrupo: SelectItem[] = [];

  public listTaxa: SelectItem[] = [];

  constructor(private servicoService: ServicoService, private grupoService: GrupoService, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.buscarTodos();
    this.buscarGrupos();
  }

  private buscarTodos() {
    this.servicoService.buscarTodos().subscribe({
      next: result => {
        console.log(result.entity);
        this.servicos = result.entity;
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => {
      }
    });
  }

  private buscarGrupos() {
    this.grupoService.buscarTodos().subscribe({
      next: result => {
        console.log(result.entity);
        this.listGrupo.push({label: 'Selecione um grupo', value: null});
        for (let index = 0; index < result.entity.length; index++) {
          const element = result.entity[index];
          this.listGrupo.push({label: element.nome, value: element});
        }
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => {
      }
    });
  }

  public buscarPorNome() {
    if (this.nomeServico !== '') {
      this.servicoService.buscarPorNome(this.nomeServico).subscribe({
        next: result => {
          console.log(result.entity);
          this.servicos = result.entity;
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
    this.header = 'Incluir serviço';
    this.registro = new Servico();
    this.displayModal = true;
  }

  public editarRegistro(servico: Servico) {
    this.header = 'Editar servico';
    this.registro = new Servico(servico);
    this.registro.grupo = servico.grupo;
    this.displayModal = true;
  }

  public verificarAlteracao() {
    if (this.registro.id) {
      this.alterar();
    } else {
      this.incluir();
    }
  }

  public alterar() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.servicoService.atualizar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.servicos = result.entity;
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

  public incluir() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.servicoService.cadastrar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.servicos = result.entity;
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

  public excluirRegistro(servico: Servico) {
    this.confirmationService.confirm({
      message: `Confirma a exclusão do serviço ${servico.nome}?`,
      accept: () => {
        this.servicoService.deletar(servico).subscribe({
          next: result => {
            console.log(result.entity);
            this.servicos = result.entity;
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
