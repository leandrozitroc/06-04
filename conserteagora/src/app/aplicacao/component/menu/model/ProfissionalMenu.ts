import { MenuItem } from "primeng/api";

export class ProfissionalMenu {
    menu: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            escape: true,
            routerLink: '/profissional'
        },
    ];
}