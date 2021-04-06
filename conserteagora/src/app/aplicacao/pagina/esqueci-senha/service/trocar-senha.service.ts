import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseClient } from 'src/app/aplicacao/model/ResponseClient';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { Http } from 'src/app/aplicacao/service/http/Http';

@Injectable({
  providedIn: 'root'
})
export class TrocarSenhaService extends Http {


  private api = `${this.server}/autenticar`;

  constructor(private http: HttpClient) {
    super();
  }

  public autenticarUsuario(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}/novasenha/autenticar`, usuario);
  }

  public trocarSenha(usuario: UsuarioCadastro): Observable<ResponseClient> {
    return this.http.post<ResponseClient>(`${this.api}/novasenha/trocarSenha`, usuario);
  }

}
