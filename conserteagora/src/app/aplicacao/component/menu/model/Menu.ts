import { MenuItem } from "primeng/api";
import { EnumTipoAcesso } from "src/app/aplicacao/model/EnumTipoAcesso";
import { AdministradorMenu } from "./AdministradorMenu";
import { ClienteMenu } from "./ClienteMenu";
import { ProfissionalMenu } from "./ProfissionalMenu";

export class Menu {
    
    public static obterMenu(acesso: EnumTipoAcesso): MenuItem[] {
        switch(acesso) {
            case EnumTipoAcesso.ADMINISTRADOR: return new AdministradorMenu().menu;
            case EnumTipoAcesso.CLIENTE: return new ClienteMenu().menu;
            case EnumTipoAcesso.PROFISSIONAL: return new ProfissionalMenu().menu;
        }
    }
    
}