import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from 'src/app/aplicacao/model/Grupo';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends Http {

  private api = `${this.server}/grupo`;

  constructor(private http: HttpClient) {
    super();
  }

  public buscarTodos(): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}`);
  }

  public buscarPorId(grupo: Grupo): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/${grupo.id}`);
  }

  public buscarPorNome(nomeGrupo: string): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/pesquisar/${nomeGrupo}`);
  }

  public cadastrar(grupo: Grupo): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}`, grupo);
  }

  public atualizar(grupo: Grupo): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}`, grupo);
  }

  public deletar(grupo: Grupo): Observable<ResponseClient> {
    return this.http.delete<ResponseClient>(`${this.api}/${grupo.id}`);
  }

}
