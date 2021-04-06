import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../service/storage/storage.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.storage.usuarioLogado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
