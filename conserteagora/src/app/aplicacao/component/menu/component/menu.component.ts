import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from '../model/Menu';
import { NgZone } from '@angular/core';
import { EnumTipoAcesso, EnumTipoAcessoFactory } from 'src/app/aplicacao/model/EnumTipoAcesso';
import { StorageService } from 'src/app/aplicacao/service/storage/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itemsMenu: MenuItem[];

  public itemsPerfil: MenuItem[];

  public display: boolean = false;

  constructor(private router: Router, private storage: StorageService, public zone: NgZone) { }

  ngOnInit(): void {
    this.itemsPerfil = [
      {
        label: 'Editar perfil',
        icon: 'pi pi-user-edit',
        routerLink: '/perfil'
      },
      {
        separator: true
      },
      {
        icon: 'pi pi-fw pi-power-off',
        label: 'Quit',
        routerLink: '/',
        command: () => {
          this.logout();
        }
      }
    ];
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.renderizarMenu();
  }

  private renderizarMenu() {
    if ((this.itemsMenu === null || this.itemsMenu === undefined || this.itemsMenu.length === 0) && this.storage.getAuthorities() !== '') {
      this.itemsMenu = [];
      this.itemsMenu = Menu.obterMenu(EnumTipoAcessoFactory.obterEnumByDescricao(this.storage.getAuthorities()));
    }
  }

  public userAuthenticated(): boolean {
    if (this.storage.usuarioLogado()) {
      this.renderizarMenu();
      return true;
    } else {
      this.itemsMenu = [];
      return false;
    }
    // return this.storage.usuarioLogado();
  }

  private logout() {
    this.storage.removeUser();
    this.router.navigate(['/']);
  }

}
