import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';

import { CadastrarServicoRoutingModule } from '../route/cadastrar-servico.routing.module';
import { CadastrarServicoComponent } from '../component/cadastrar-servico.component';
import { ServicoService } from 'src/app/aplicacao/pagina/administrador/componentes/servico/service/servico.service';

import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import { TaxaService } from 'src/app/aplicacao/pagina/administrador/componentes/taxa/service/taxa.service';

@NgModule({
  declarations: [ CadastrarServicoComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputNumberModule,
    DropdownModule,

    CadastrarServicoRoutingModule
  ], 
  providers: [HttpInterceptorAuthenticate, ServicoService, TaxaService]
})
export class CadastrarServicoModule { }
