import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from '../component/profissional.component';

const admProfissional: Routes = [
    {
        path: '', component: ProfissionalComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(admProfissional)],
    exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
