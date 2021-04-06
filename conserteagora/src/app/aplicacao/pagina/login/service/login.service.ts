import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/aplicacao/model/JwtResponse';
import { HttpClient } from '@angular/common/http';
import { Http } from 'src/app/aplicacao/service/http/Http';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends Http {

  private api = `${this.server}`;

  constructor(private http: HttpClient) {
    super();
  }

  public autenticarUsuario(usuario: UsuarioLogin): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.api}/autenticar`, usuario);
  }

}
