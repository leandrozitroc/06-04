import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import { TaxaService } from '../service/taxa.service';
import { TaxaRoutingModule } from '../route/taxa.routing.module';
import { TaxaComponent } from '../component/taxa.component';

import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ServicoService } from '../../servico/service/servico.service';



@NgModule({
  declarations: [TaxaComponent],
  exports: [TaxaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,

    TaxaRoutingModule,
  ],
  providers: [HttpInterceptorAuthenticate, TaxaService, ServicoService, ConfirmationService]
})
export class TaxaModule { }
