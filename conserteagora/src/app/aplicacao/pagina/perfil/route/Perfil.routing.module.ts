import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from '../component/perfil.component';

const perfil: Routes = [
    { path: '', component: PerfilComponent }
];

@NgModule({
    imports: [RouterModule.forChild(perfil)],
    exports: [RouterModule]
})
export class PerfilRoutingModule { }
