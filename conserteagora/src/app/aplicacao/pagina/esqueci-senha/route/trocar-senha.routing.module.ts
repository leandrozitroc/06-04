import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrocarSenhaComponent } from '../component/trocar-senha.component';

const senha: Routes = [
    { path: '', component: TrocarSenhaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(senha)],
    exports: [RouterModule]
})
export class TrocarSenhaRoutingModule { }
