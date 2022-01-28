import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-reading',
  templateUrl: './post-reading.component.html',
  styleUrls: ['./post-reading.component.css']
})
export class PostReadingComponent implements OnInit {

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
