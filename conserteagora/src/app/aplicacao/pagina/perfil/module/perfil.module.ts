import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilService } from '../service/perfil.service';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';
import { PerfilComponent } from '../component/perfil.component';
import { PerfilRoutingModule } from '../route/Perfil.routing.module';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [PerfilComponent],
  exports: [PerfilComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    CalendarModule,
    InputMaskModule,

    PerfilRoutingModule,
  ],
  providers: [HttpInterceptorAuthenticate, StorageService, PerfilService]
})
export class PerfilModule { }
