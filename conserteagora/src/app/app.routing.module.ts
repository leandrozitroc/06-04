import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './aplicacao/component/index/index.component';
import { AutenticacaoGuard } from './aplicacao/guarda/autenticacao.guard';
import { AdministradorGuard } from './aplicacao/pagina/administrador/guarda/administrador.guard';
import { ClienteGuard } from './aplicacao/pagina/cliente/guarda/cliente.guard';
import { LoginGuard } from './aplicacao/pagina/login/guard/login.guard'
import { ProfissionalGuard } from './aplicacao/pagina/profissional/guarda/profissional.guard';

const appRoute: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./aplicacao/pagina/login/module/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'trocar-senha',
    loadChildren: () => import('./aplicacao/pagina/esqueci-senha/module/trocar-senha.module').then(m => m.TrocarSenhaModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./aplicacao/pagina/cadastro/module/cadastro.module').then(m => m.CadastroModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./aplicacao/pagina/perfil/module/perfil.module').then(m => m.PerfilModule),
    canActivate: [AutenticacaoGuard]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./aplicacao/pagina/cliente/module/cliente.module').then(m => m.ClienteModule),
    canActivate: [AutenticacaoGuard, ClienteGuard]
  },
  {
    path: 'profissional',
    loadChildren: () => import('./aplicacao/pagina/profissional/module/profissional.module').then(m => m.ProfissionalModule),
    canActivate: [AutenticacaoGuard, ProfissionalGuard]
  },
  {
    path: 'administrador',
    loadChildren: () => import('./aplicacao/pagina/administrador/module/administrador.module').then(m => m.AdministradorModule),
    canActivate: [AutenticacaoGuard, AdministradorGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
