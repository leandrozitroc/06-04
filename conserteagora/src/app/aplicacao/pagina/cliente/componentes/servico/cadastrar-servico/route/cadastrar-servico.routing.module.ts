import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarServicoComponent } from '../component/cadastrar-servico.component';

const cadastrarServico: Routes = [
    { path: '', component: CadastrarServicoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(cadastrarServico)],
    exports: [RouterModule]
})
export class CadastrarServicoRoutingModule { }
