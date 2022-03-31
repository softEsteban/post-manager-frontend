import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { UserData } from 'src/app/models/AuthedUser';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
// import { FormErrorService } from 'src/app/shared/services/form-error.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  //Grupo de campos del formulario
  public postForm!: FormGroup;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private postService: PostService,
      public authService : AuthService
  ) {
   }

  ngOnInit(): void {
    this.initForm();
  }

  //Inicializa el formulario
  private initForm(): void {
    this.postForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZñÑ ]*$')]],
      text: ["", [Validators.required, Validators.minLength(3)] ],
      category: ["", Validators.required]
    })
  }


  public registerPost({ value, valid}:{ value: any, valid: boolean}) : void{
    console.log(value,valid)

    this.postForm.get('text')?.invalid
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
   
    let date= new Date();

    value['status'] = "On hold";
    value['reqDate'] = date.toLocaleDateString();

    this.postService.registerPost(value)
        .subscribe(resp => {
          Swal.fire({
            html: "Tu registro ha sido exitoso",
            icon: "success",
            allowEscapeKey: false,
            allowOutsideClick: false,
            confirmButtonText: "Aceptar"
          })
          this.postForm.reset();
          console.log(resp)
        })

  }
}
