import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from '../component/cadastro-usuario/cadastro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from '../service/cadastro.service';
import { CadastroRoutingModule } from '../route/cadastro.routing.model';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [CadastroComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    CalendarModule,
    InputMaskModule,

    CadastroRoutingModule
  ],
  providers: [StorageService, CadastroService]
})
export class CadastroModule { }
