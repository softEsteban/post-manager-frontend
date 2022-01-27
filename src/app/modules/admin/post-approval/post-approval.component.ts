import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit {

  public postList = [] as any;
  public selectedPost = "";

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(){
    this.adminService.getAllPosts()
        .subscribe(resp => {
          this.postList = resp
          this.postList.reverse()
        })
  }

  deletePost(id: string){
    this.selectedPost= id;
    alert('selected post: ' + id)
    this.adminService.deletePost(id)
        .subscribe()
  }

}
