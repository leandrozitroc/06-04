import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeClienteComponent } from "../home-cliente/home-cliente.component";

const cliente: Routes = [
    { path: '', component: HomeClienteComponent, pathMatch: 'full' },
    {
        path: 'servico/consultar', loadChildren: () => import('../componentes/servico/consultar-servico/module/consultar-servico.module').then(m => m.ConsultarServicoModule),
    },
    {
        path: 'servico/cadastrar', loadChildren: () => import('../componentes/servico/cadastrar-servico/module/cadastrar-servico.module').then(m => m.CadastrarServicoModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(cliente)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
