import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from '../home-cliente/home-cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ClienteRoutingModule } from '../route/cliente.routing.model';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import {MatCardModule} from '@angular/material/card'
import { PerfilService } from '../../perfil/service/perfil.service';





@NgModule({
  declarations: [HomeClienteComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClienteRoutingModule,
    MatCardModule,



  ],



  providers: [HttpInterceptorAuthenticate, HttpClientModule,PerfilService,HttpClient],
})
export class ClienteModule { }
