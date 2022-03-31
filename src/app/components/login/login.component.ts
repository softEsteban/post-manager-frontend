import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
ReactiveFormsModule
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    
  }

  //Init the login form group
  private initForm() : void {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required] ],
      passw: ["",[Validators.required] ]
    })
  }

  //Authentication
  public login({ value, valid } : {value : any, valid : boolean}): void {
    console.log(value, valid);

    this.authService.login(value).subscribe(resp =>{
      console.log(resp);
      this.router.navigate(['users/me']);
      alert("Welcome")
    }, error => {
        Swal.fire({
          html: "Inténtalo de nuevo",
          icon: "warning",
          allowEscapeKey: false,
          allowOutsideClick: false,
          confirmButtonText: "Aceptar"
        })
      })
    }

}
