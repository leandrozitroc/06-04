import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoComponent } from '../component/servico.component';

const servico: Routes = [
    { path: '', component: ServicoComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(servico)],
    exports: [RouterModule]
})
export class ServicoRoutingModule { }
