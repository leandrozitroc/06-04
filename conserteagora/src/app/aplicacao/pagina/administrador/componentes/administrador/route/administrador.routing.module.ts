import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from '../component/administrador.component';

const adm: Routes = [
    {
        path: '', component: AdministradorComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(adm)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }
