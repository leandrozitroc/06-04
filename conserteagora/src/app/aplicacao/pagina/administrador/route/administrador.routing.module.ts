import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdministradorComponent } from '../home-administrador/home-administrador.component';

const adm: Routes = [
    {
        path: '', component: HomeAdministradorComponent, pathMatch: 'full',
    },
    {
        path: 'servico', loadChildren: () => import('../componentes/servico/module/servico.module').then(m => m.ServicoModule),
    },
    {
        path: 'grupo', loadChildren: () => import('../componentes/grupo/module/grupo.module').then(m => m.GrupoModule),
    },
    {
        path: 'taxa', loadChildren: () => import('../componentes/taxa/module/taxa.module').then(m => m.TaxaModule),
    },
    {
        path: 'cliente', loadChildren: () => import('../componentes/cliente/module/cliente.module').then(m => m.ClienteModule),
    },
    {
        path: 'profissional', loadChildren: () => import('../componentes/profissional/module/profissional.module').then(m => m.ProfissionalModule),
    },
    {
        path: 'administrador', loadChildren: () => import('../componentes/administrador/module/administrador.module').then(m => m.AdministradorModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(adm)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }
