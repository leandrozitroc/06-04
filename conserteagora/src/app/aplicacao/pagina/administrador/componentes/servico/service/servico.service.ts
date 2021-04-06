import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from 'src/app/aplicacao/model/Grupo';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { Servico } from 'src/app/aplicacao/model/Servico';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService extends Http {

  private api = `${this.server}/servico`;

  constructor(private http: HttpClient) {
    super();
  }

  public buscarTodos(): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}`);
  }

  public buscarPorId(servico: Servico): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/${servico.id}`);
  }

  public buscarPorNome(nomeServico: string): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/pesquisar/${nomeServico}`);
  }

  public cadastrar(servico: Servico): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}`, servico);
  }

  public atualizar(servico: Servico): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}`, servico);
  }

  public deletar(servico: Servico): Observable<ResponseClient> {
    return this.http.delete<ResponseClient>(`${this.api}/${servico.id}`);
  }

}
