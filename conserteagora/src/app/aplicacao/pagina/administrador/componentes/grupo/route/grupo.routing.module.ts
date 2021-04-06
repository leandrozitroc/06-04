import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from '../component/grupo.component';

const grupo: Routes = [
    { path: '', component: GrupoComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(grupo)],
    exports: [RouterModule]
})
export class GrupoRoutingModule { }
