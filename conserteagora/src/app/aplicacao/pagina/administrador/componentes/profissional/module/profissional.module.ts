import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorUsuarioModule } from '../../usuario/module/administrador-usuario.module';
import { ProfissionalComponent } from '../component/profissional.component';
import { ProfissionalRoutingModule } from 'src/app/aplicacao/pagina/profissional/route/Profissional.routing.module';


@NgModule({
  declarations: [ProfissionalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    AdministradorUsuarioModule,

    ProfissionalRoutingModule,
  ],
})
export class ProfissionalModule { }
