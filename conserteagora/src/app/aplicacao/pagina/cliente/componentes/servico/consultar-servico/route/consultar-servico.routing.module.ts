import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarServicoComponent } from '../component/consultar-servico.component';

const consultarServico: Routes = [
    { path: '', component: ConsultarServicoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(consultarServico)],
    exports: [RouterModule]
})
export class ConsultarServicoRoutingModule { }
