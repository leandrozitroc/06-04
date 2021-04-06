import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorAuthenticate } from 'src/app/aplicacao/service/http/interceptor';
import { ConsultarServicoRoutingModule } from '../route/consultar-servico.routing.module';
import { ConsultarServicoComponent } from '../component/consultar-servico.component';


@NgModule({
  declarations: [ ConsultarServicoComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ConsultarServicoRoutingModule
  ], 
  providers: [HttpInterceptorAuthenticate]
})
export class ConsultarServicoModule { }
