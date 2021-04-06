import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends Http {

  private api = `${this.server}/usuario`;

  constructor(private http: HttpClient) {
    super();
  }

  public infoUsuario(userLogin: string): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${this.api}/${userLogin}`);
  }

  public atualizarCadastro(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}`, usuario);
  }

  public atualizarSenha(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.put<ResponseClient>(`${this.api}/senha`, usuario);
  }

}
