import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { Taxa } from 'src/app/aplicacao/model/Taxa';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class TaxaService extends Http {

  private api = `${this.server}/taxa`;

  constructor(private http: HttpClient) {
    super();
  }

  public buscarTodos(): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}`);
  }

  public buscarPorId(taxa: Taxa): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/${taxa.id}`);
  }

  public buscarPorTaxa(taxa: string): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/pesquisar/${taxa}`);
  }

  public buscarTaxaPorServico(servico: number): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/pesquisar/porServico/${servico}`);
  }

  public cadastrar(taxa: Taxa): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}`, taxa);
  }

  public atualizar(taxa: Taxa): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}`, taxa);
  }

  public deletar(id: number): Observable<ResponseClient> {
    return this.http.delete<ResponseClient>(`${this.api}/${id}`);
  }

}
