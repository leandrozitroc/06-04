import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenuFixModule } from './aplicacao/component/menu/module/menu.module';
import { AutenticacaoGuard } from './aplicacao/guarda/autenticacao.guard';
import { ClienteGuard } from './aplicacao/pagina/cliente/guarda/cliente.guard';
import { ProfissionalGuard } from './aplicacao/pagina/profissional/guarda/profissional.guard';
import { AdministradorGuard } from './aplicacao/pagina/administrador/guarda/administrador.guard';


//material
import{MatCardModule} from "@angular/material/card"
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './aplicacao/component/toolbar/toolbar.component';
import { IndexComponent } from './aplicacao/component/index/index.component'




@NgModule({
  declarations: [AppComponent, ToolbarComponent, IndexComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenuFixModule,
    ToastModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,


  ],

  providers: [MessageService, AutenticacaoGuard, ClienteGuard, ProfissionalGuard, AdministradorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
