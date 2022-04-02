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
  currentUser= {id:"", role:"", user:""};
  user="";
  

  constructor(
    public postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.getSession();
  }


  //get published posts
  private getPosts(){
    this.postService.getPubPosts()
        .subscribe(resp => {
          this.postList = resp
          this.postList.reverse()
        })
  }

  //verify if there is a user in session storage
  getSession() {
    this.currentUser = JSON.parse(sessionStorage.getItem('datos') || '{}');
    this.user = this.currentUser.user;
    console.log(this.currentUser.id)
    console.log(this.currentUser.role)
    console.log(this.currentUser.user)
  }


  savePost() {
    alert("Got it!")
  }




}


