import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { AdministradorUsuarioComponent } from '../component/administrador-usuario.component';
import { UsuarioService } from '../service/usuario.service';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';

import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [AdministradorUsuarioComponent],
  exports: [AdministradorUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    CalendarModule,
    InputMaskModule,
    
    DropdownModule,
  ],
  providers: [HttpInterceptorAuthenticate, StorageService, UsuarioService, ConfirmationService]
})
export class AdministradorUsuarioModule { }
