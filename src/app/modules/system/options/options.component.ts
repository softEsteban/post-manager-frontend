import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/AuthedUser';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public userData : UserData;

  constructor(
    private router : Router,
    public authService : AuthService
  ) {
    this.userData = authService.userData;
   }

  ngOnInit(): void {
  }
  
  public closeSession():void{
    this.authService.logoutSystem();
    this.router.navigate(['home'])
  }

}
