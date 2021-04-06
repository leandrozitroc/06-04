import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from '../component/cliente.component';
import { AdministradorUsuarioModule } from '../../usuario/module/administrador-usuario.module';
import { ClienteRoutingModule } from '../route/cliente.routing.module';


@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    AdministradorUsuarioModule,

    ClienteRoutingModule,
  ],
})
export class ClienteModule { }
