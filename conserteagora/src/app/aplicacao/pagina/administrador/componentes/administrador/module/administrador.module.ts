import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorUsuarioModule } from '../../usuario/module/administrador-usuario.module';
import { AdministradorComponent } from '../component/administrador.component';
import { AdministradorRoutingModule } from '../route/administrador.routing.module';


@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    AdministradorUsuarioModule,

    AdministradorRoutingModule,
  ],
})
export class AdministradorModule { }
