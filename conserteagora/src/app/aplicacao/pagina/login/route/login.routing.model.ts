import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../component/login.component";

const login: Routes = [ 
  { path: '',  component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(login)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
