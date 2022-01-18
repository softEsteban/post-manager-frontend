import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostApprovalComponent } from './post-approval/post-approval.component';
import { PostReqReadingComponent } from './post-req-reading/post-req-reading.component';
import { PublishedPostsComponent } from './published-posts/published-posts.component';

const routes: Routes = [
  {
    path: 'post-approval',
    component: PostApprovalComponent
  },
  {
    path: 'post-req-reading',
    component: PostReqReadingComponent
  },
  {
    path: 'published-posts',
    component: PublishedPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
