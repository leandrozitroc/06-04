import { Taxa } from 'src/app/aplicacao/model/Taxa';
import { Servico } from './../../../../../model/Servico';

export class ServicoCliente {
    servico: Servico = new Servico();
    taxa: Taxa;
    descricao: string;
    prazo: number;

    public constructor(init?: Partial<Taxa>) {
        Object.assign(this, init);
    }

}
