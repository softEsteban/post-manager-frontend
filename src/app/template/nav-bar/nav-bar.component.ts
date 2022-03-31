import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser={role:""};

  constructor() { 

  }

  ngOnInit(): void { 

  }

  getRole() {
    this.currentUser = JSON.parse(sessionStorage.getItem('datos') || '{}');
    console.log(this.currentUser.role)
  }

  // saveLocalStorage() {
  //   localStorage.setItem('id', 'id1223565')
  // }

  // getLocalStorage() {
  //   let id = localStorage.getItem('id')
  //   console.log(id)
  // }
}
