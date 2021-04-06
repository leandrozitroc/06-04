import { MenuItem } from "primeng/api";

export class AdministradorMenu {
    menu: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/administrador'
        },
        {
            label: 'Cadastrar',
            icon: 'pi pi-file',
            items: [
                {label: 'Grupo', routerLink: '/administrador/grupo'},
                {label: 'Serviço', routerLink: '/administrador/servico'},
                {label: 'Valor do serviço', routerLink: '/administrador/taxa'},
            ]
        }, 
        {
            label: 'Usuarios',
            icon: 'pi pi-users',
            items: [
                {label: 'Cliente', routerLink: '/administrador/cliente'},
                {label: 'Profissional', routerLink: '/administrador/profissional'},
                {label: 'Administrador', routerLink: '/administrador/administrador'},
            ]
        }
    ];
}