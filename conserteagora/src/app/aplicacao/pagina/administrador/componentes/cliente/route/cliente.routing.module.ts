import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from '../component/cliente.component';

const admCliente: Routes = [
    {
        path: '', component: ClienteComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(admCliente)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
