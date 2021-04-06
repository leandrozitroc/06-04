import { MenuItem } from "primeng/api";

export class ClienteMenu {
    menu: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/cliente'
        },
        {
            label: 'Serviços',
            icon: 'pi pi-cog',
            items: [
                {label: 'Cadastrar', routerLink: '/cliente/servico/cadastrar'},
                {label: 'Consultar', routerLink: '/cliente/servico/consultar'},
            ]
        },
    ];
}