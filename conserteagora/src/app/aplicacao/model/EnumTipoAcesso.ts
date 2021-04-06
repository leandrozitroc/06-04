export enum EnumTipoAcesso {
    ADMINISTRADOR = 0,
    CLIENTE = 1,
    PROFISSIONAL = 2
}

export class EnumTipoAcessoFactory {

    public static obterDescricaoEnum(tipoAcesso: EnumTipoAcesso) {
        switch(tipoAcesso) {
            case EnumTipoAcesso.ADMINISTRADOR: return "Administrador";
            case EnumTipoAcesso.CLIENTE: return "Cliente";
            case EnumTipoAcesso.PROFISSIONAL: return "Profissional";
        }
    }

    public static obterDescricaoEnumById(tipoAcesso: number) {
        switch(tipoAcesso) {
            case 0: return "administrador";
            case 1: return "cliente";
            case 2: return "profissional";
        }
    }

    public static obterEnumByDescricao(tipoAcesso: string): EnumTipoAcesso {
        switch(tipoAcesso) {
            case "administrador": return EnumTipoAcesso.ADMINISTRADOR;
            case "cliente": return EnumTipoAcesso.CLIENTE;
            case "profissional": return EnumTipoAcesso.PROFISSIONAL;
        }
    }
    
    public static obterTipoAcesso(id: number) {
        switch(id) {
            case 0: return EnumTipoAcesso.ADMINISTRADOR;
            case 1: return EnumTipoAcesso.CLIENTE;
            case 2: return EnumTipoAcesso.PROFISSIONAL;
        }
    }

}