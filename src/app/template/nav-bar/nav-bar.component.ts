import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser={role:""};

  constructor(
    public authService: AuthService,
    public router: Router
  ) { 
    
  }

  ngOnInit(): void { 
    this.getRole();
  }

  getRole() {
    this.currentUser = JSON.parse(sessionStorage.getItem('datos') || '{}');
  }

  logOut(){
    this.authService.logoutSystem();
    // this.router.navigate(['/home']);
  }

  // saveLocalStorage() {
  //   localStorage.setItem('id', 'id1223565')
  // }

  // getLocalStorage() {
  //   let id = localStorage.getItem('id')
  //   console.log(id)
  // }
}
