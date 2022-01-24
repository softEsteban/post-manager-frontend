import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/AuthedUser';
import { AuthService } from '../../modules/auth/services/auth.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // public userData : UserData;

  constructor(
    private router : Router,
    public authService: AuthService
  ) {
    // this.userData = authService.userData;
  }

  ngOnInit(): void {


  }

}
