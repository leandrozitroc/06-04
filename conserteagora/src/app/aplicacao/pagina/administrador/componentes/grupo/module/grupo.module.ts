import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import { GrupoComponent } from '../component/grupo.component';
import { GrupoService } from '../service/grupo.service';
import { GrupoRoutingModule } from '../route/grupo.routing.module';

import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [GrupoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    DialogModule,
    TooltipModule,
    ConfirmDialogModule,

    GrupoRoutingModule,
  ],
  providers: [HttpInterceptorAuthenticate, GrupoService, ConfirmationService]
})
export class GrupoModule { }
