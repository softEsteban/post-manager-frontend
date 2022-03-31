import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostReqReadingComponent } from './post-req-reading/post-req-reading.component';
import { PostApprovalComponent } from './post-approval/post-approval.component';
import { PublishedPostsComponent } from './published-posts/published-posts.component';


@NgModule({
  declarations: [
    PostReqReadingComponent,
    PostApprovalComponent,
    PublishedPostsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
