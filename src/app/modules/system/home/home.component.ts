import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/AuthedUser';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userData : UserData;

  constructor(
    private router : Router,
    public authService: AuthService
  ) { 
    this.userData = authService.userData;
  }

  ngOnInit(): void {
  }

}
