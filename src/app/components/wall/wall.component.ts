import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../modules/users/services/post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  //Initial objects
  public postList = [] as any;

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }


  //get published posts
  private getPosts(){
    this.postService.getPubPosts()
        .subscribe(resp => {
          this.postList = resp
          this.postList.reverse()
        })
  }

}
