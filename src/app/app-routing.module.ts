import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/home"
  },
  {
    path: "users",
    loadChildren: () => import ('./modules/users/users.module').then(x => x.UsersModule)
  },
  {
    path: "admin",
    loadChildren: () => import ('./modules/admin/admin.module').then(x => x.AdminModule)
  },
  {
    path: "auth",
    loadChildren: () => import ('./modules/auth/auth.module').then(x => x.AuthModule)
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
