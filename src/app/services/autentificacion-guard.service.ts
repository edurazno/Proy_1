import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuardService implements CanActivate{

  constructor(
    private authSevice:AutentificacionService
  ) { }
  canActivate():boolean{
    return this.authSevice.isAuthentificated();
  }
}
