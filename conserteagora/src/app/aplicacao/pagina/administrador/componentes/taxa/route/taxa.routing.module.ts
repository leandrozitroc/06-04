import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxaComponent } from '../component/taxa.component';

const taxa: Routes = [
    { path: '', component: TaxaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(taxa)],
    exports: [RouterModule]
})
export class TaxaRoutingModule { }
