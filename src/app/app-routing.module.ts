import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WallComponent } from './components/wall/wall.component';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "wall",
    component: WallComponent
  },
  {
    path: "users",
    loadChildren: () => import ('./modules/users/users.module').then(x => x.UsersModule)
  },
  {
    path: "admin",
    loadChildren: () => import ('./modules/admin/admin.module').then(x => x.AdminModule),
  },
  {
    path: '**',
    redirectTo: "/home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
