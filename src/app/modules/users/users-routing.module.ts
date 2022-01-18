import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostReadingComponent } from './post-reading/post-reading.component';

const routes: Routes = [
  {
    path: 'post-form',
    component: PostFormComponent
  },
  {
    path: 'post-reading',
    component: PostReadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
