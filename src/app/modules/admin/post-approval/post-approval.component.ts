import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit {

  public postList = [] as any;

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

}
