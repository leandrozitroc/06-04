import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from '../component/cadastro-usuario/cadastro.component';

const login: Routes = [
    { path: '', component: CadastroComponent }
];

@NgModule({
    imports: [RouterModule.forChild(login)],
    exports: [RouterModule]
})
export class CadastroRoutingModule { }
