import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { Servico } from 'src/app/aplicacao/model/Servico';
import { Taxa } from 'src/app/aplicacao/model/Taxa';
import { ServicoService } from 'src/app/aplicacao/pagina/administrador/componentes/servico/service/servico.service';
import { TaxaService } from 'src/app/aplicacao/pagina/administrador/componentes/taxa/service/taxa.service';
import { ServicoCliente } from '../../model/ServicoCliente';


@Component({
  selector: 'app-cadastrar-servico',
  templateUrl: './cadastrar-servico.component.html',
  styleUrls: ['./cadastrar-servico.component.scss']
})
export class CadastrarServicoComponent implements OnInit {

  public registro

  public listaServico: SelectItem[] = [];

  constructor(private servicoService: ServicoService, private taxaServico: TaxaService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.servicoService.buscarTodos().subscribe({
      next: result => {
        this.listaServico.push({ label: 'Selecione um serviço', value: null });
        for (let index = 0; index < result.entity.length; index++) {
          const element = result.entity[index];
          this.listaServico.push({ label: element.nome, value: element });
        }
      }
    });
  }

  public buscarTaxa(event) {
    if (this.registro.taxa === null || this.registro.taxa === undefined || event.value.id !== this.registro.taxa.id) {
      this.taxaServico.buscarTaxaPorServico(this.registro.servico.id).subscribe({
        next: result => {
          this.registro.taxa = new Taxa(result.entity);
        }, error: erro => {
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }
      });
    }
  }
  cadastrar(){
    this.servicoService.cadastrar(this.registro).subscribe({
      next: ()=>{
        this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: "Cadastrado com sucesso" })
        this.router.navigate(['/login']);
      }, error: (erro)=>{
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error })
        this.router.navigate(['/servico/consultar'])
      }, complete: ()=>{
        this.router.navigate(['/servico/consultar']);
      }

      })

    }
  // public buscarTaxa() {
  //   if ((this.registro.taxa.servico === null || this.registro.taxa.servico === undefined)
  //     || this.registro.servico.id !== this.registro.taxa.servico.id) {
  //     this.taxaServico.buscarTaxaPorServico(this.registro.servico.id).subscribe({
  //       next: result => {
  //         this.registro.taxa = new Taxa(result.entity);
  //       }, error: erro => {
  //         this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
  //       }
  //     });
  //   }
  // }

}
