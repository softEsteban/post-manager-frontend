import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public newUser!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
      ) { }

  ngOnInit(): void {
    this.initForm();
  }

  //Inicializa el formulario
  private initForm(): void {
    this.newUser = this.fb.group({
      userName: ["", [Validators.required, Validators.minLength(3)] ],
      passw: ["", [Validators.required, Validators.minLength(3)] ],
      passw2: ["", [Validators.required, Validators.minLength(3)] ]
    })
  }

  //Registra un usuario
  public registerUser( { value, valid} : {value: any, valid: boolean}) : void {
    console.log(value,valid);

    this.newUser.get('text')?.invalid
    if(!valid){
      Swal.fire({
        html: 'Existen campos inválidos',
        icon:'warning',
        allowEnterKey: false,
        allowOutsideClick: false,
        confirmButtonText: 'Aceptar'
      })
      return;
    }

    value['role'] = "user";

    console.log(value)
    if(value['passw'] == value['passw2'] )
    {
      delete value['passw2'];
      console.log(value)
      this.registerService.registerUser(value)
          .subscribe(resp => {
            Swal.fire({
              html: "Tu registro ha sido exitoso",
              icon: "success",
              allowEscapeKey: false,
              allowOutsideClick: false,
              confirmButtonText: "Aceptar"
            })
            this.newUser.reset();
          })

    }else{
      Swal.fire({
        html: "Las contraseñas no coinciden",
        icon: "warning",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "Aceptar"
      })
    }

  }


  



}
