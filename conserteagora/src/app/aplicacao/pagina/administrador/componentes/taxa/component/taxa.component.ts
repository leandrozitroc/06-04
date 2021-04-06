import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService, SelectItem } from 'primeng/api';
import { Grupo } from 'src/app/aplicacao/model/Grupo';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { Servico } from 'src/app/aplicacao/model/Servico';
import { Taxa } from 'src/app/aplicacao/model/Taxa';
import { GrupoService } from '../../grupo/service/grupo.service';
import { ServicoService } from '../../servico/service/servico.service';
import { TaxaService } from '../service/taxa.service';

@Component({
  selector: 'app-taxa',
  templateUrl: './taxa.component.html',
  styleUrls: ['./taxa.component.scss']
})
export class TaxaComponent implements OnInit {

  public displayModal: boolean;

  public search: string = '';

  public header: string = '';

  public registro: Taxa = new Taxa();

  public taxas: Taxa[];

  public listServico: SelectItem[] = [];

  constructor(private taxaService: TaxaService, private servicoService: ServicoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.buscarTodos();
    this.buscarServicos();
  }

  private buscarTodos() {
    this.taxaService.buscarTodos().subscribe({
      next: result => {
        console.log(result.entity);
        this.taxas = result.entity;
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => { }
    });
  }

  private buscarServicos() {
    this.servicoService.buscarTodos().subscribe({
      next: result => {
        console.log(result.entity);
        this.listServico.push({label: 'Selecione um serviço', value: null});
        for (let index = 0; index < result.entity.length; index++) {
          const element = result.entity[index];
          this.listServico.push({label: element.nome, value: element});
        }
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => {
      }
    });
  }

  public buscarPorTaxa() {
    if (this.search !== '') {
      this.taxaService.buscarPorTaxa(this.search).subscribe({
        next: result => {
          console.log(result.entity);
          this.taxas = result.entity;
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
    this.header = 'Incluir taxa';
    this.registro = new Taxa();
    this.displayModal = true;
  }

  public editarRegistro(taxa: Taxa) {
    this.header = 'Editar taxa';
    this.registro = new Taxa(taxa);
    this.registro.calcularValor();
    this.displayModal = true;
  }

  public verificarAlteracao() {
    if (this.registro.id) {
      this.alterarGrupo();
    } else {
      this.incluirTaxa();
    }
  }

  public calcularValorPago() {
    this.registro.calcularValor();
  }

  public alterarGrupo() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.taxaService.atualizar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.taxas = result.entity;
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

  public incluirTaxa() {
    let message: Message[] = this.registro.validarDados();
    if (message.length === 0) {
      this.taxaService.cadastrar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.taxas = result.entity;
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

  public excluirRegistro(taxa: Taxa) {
    this.confirmationService.confirm({
      message: `Confirma a exclusão dessa taxa R$ ${taxa.valor}?`,
      accept: () => {
        this.taxaService.deletar(taxa.id).subscribe({
          next: result => {
            console.log(result.entity);
            this.taxas = result.entity;
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
