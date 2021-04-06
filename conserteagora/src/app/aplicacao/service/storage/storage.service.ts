import { Injectable } from '@angular/core';
import { Storage } from '../../model/Storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private removeToken() {
    window.sessionStorage.removeItem(Storage.TOKEN_JWT);
  }

  private set token(token: string) {
    window.sessionStorage.removeItem(Storage.TOKEN_JWT);
    window.sessionStorage.setItem(Storage.TOKEN_JWT, token);
  }

  private get token() {
    return window.sessionStorage.getItem(Storage.TOKEN_JWT);
  }

  private removeLogin() {
    window.sessionStorage.removeItem(Storage.USER_LOGIN);
  }

  private set login(login: string) {
    window.sessionStorage.removeItem(Storage.USER_LOGIN);
    window.sessionStorage.setItem(Storage.USER_LOGIN, login);
  }

  private get login() {
    return window.sessionStorage.getItem(Storage.USER_LOGIN);
  }

  private removeAuthorities() {
    window.sessionStorage.removeItem(Storage.AUTHORITIES);
  }

  private set authorities(authorities: any) {
    window.sessionStorage.removeItem(Storage.AUTHORITIES);
    window.sessionStorage.setItem(Storage.AUTHORITIES, authorities);
  }

  private get authorities() {
    return window.sessionStorage.getItem(Storage.AUTHORITIES);
  }

  public saveUser(user: string, token: string, authorities: string) {
    this.login = user;
    this.token = token;
    this.authorities = authorities;
  }

  public removeUser() {
    this.removeToken();
    this.removeLogin();
    this.removeAuthorities();
  }

  public usuarioLogado(): boolean {
    return this.token !== null && this.token !== undefined;
  }

  public getToken(): string {
    return this.token;
  }

  public getLogin(): string {
    return this.login;
  }

  public getAuthorities(): string {
    return this.authorities === null ? '' : this.authorities.toLocaleLowerCase();
  }

}
