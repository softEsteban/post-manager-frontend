import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    public registerPost(datos: Post): Observable<Post> {
        const url = this.api + "/posts";
        return this.http.post<Post>(url, datos);
    }


}
