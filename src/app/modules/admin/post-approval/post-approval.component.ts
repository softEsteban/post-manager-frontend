import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit {

  //initial objects
  public postList = [] as any;
  public selectedPost = "";

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  //get api method
  private getPosts(){
    this.adminService.getAllPosts()
        .subscribe(resp => {
          this.postList = resp
          this.postList.reverse()
        })
  }

  //delete api method
  deletePost(id: string){
    this.selectedPost= id;
    Swal.fire({
      html: "¿Seguro quieres eliminarlo de la base de datos?",
      icon: "warning",
      showDenyButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonText: "Aceptar",
      denyButtonText: "Cancelar"
    }).then((result) => {
      if(result.isConfirmed){
        this.adminService.deletePost(id)
        .subscribe(resp => {
          console.log(resp);
          this.getPosts();
        })
      } else if (result.isDenied) {
        return;
      }

    })
   
  }

  //update api method
  updatePost(id: string) {
    this.adminService.updatePost(id)
        .subscribe(resp => {
          console.log(resp)
          this.getPosts();
        })
  }

}
