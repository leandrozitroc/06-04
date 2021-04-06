import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import { HomeAdministradorComponent } from '../home-administrador/home-administrador.component';
import { AdministradorRoutingModule } from '../route/administrador.routing.module';


@NgModule({
  declarations: [ HomeAdministradorComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdministradorRoutingModule
  ],
  providers: [HttpInterceptorAuthenticate]
})
export class AdministradorModule { }
