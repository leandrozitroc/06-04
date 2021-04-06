import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';

import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ServicoService } from '../service/servico.service';
import { ServicoRoutingModule } from '../route/servico.routing.module';
import { ServicoComponent } from '../component/servico.component';
import { InputMaskModule } from 'primeng/inputmask';
import { GrupoService } from '../../grupo/service/grupo.service';
import { DropdownModule } from 'primeng/dropdown';
import { TaxaService } from '../../taxa/service/taxa.service';

@NgModule({
  declarations: [ServicoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    DropdownModule,
    InputMaskModule,

    ServicoRoutingModule,
  ],
  providers: [HttpInterceptorAuthenticate, ServicoService, GrupoService, ConfirmationService]
})
export class ServicoModule { }
