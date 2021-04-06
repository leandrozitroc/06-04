import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnumTipoAcesso } from 'src/app/aplicacao/model/EnumTipoAcesso';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends Http {

  private api = `${this.server}/usuario`;

  constructor(private http: HttpClient) {
    super();
  }

  public obterUsuarioPorTipoAcesso(tipoAcesso: EnumTipoAcesso): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/tipoAcesso/${tipoAcesso}`);
  }

  public obterUsuarioPorId(id: number): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/porId/${id}`);
  }

  public obterUsuarioPorNome(nome: string, tipoAcesso: EnumTipoAcesso): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/porNome/${nome}/${tipoAcesso}`);
  }

  public cadastrar(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}`, usuario);
  }

  public atualizar(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}`, usuario);
  }

  public desbloquear(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.delete<ResponseClient>(`${this.api}/desbloquear/${usuario.id_usuario}`);
  }

  public bloquear(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.delete<ResponseClient>(`${this.api}/bloquear/${usuario.id_usuario}`);
  }

}
