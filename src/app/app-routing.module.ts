import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutentificacionGuardService } from './services/autentificacion-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' }, 
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path:'menu',
    canActivate:[AutentificacionGuardService],
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
