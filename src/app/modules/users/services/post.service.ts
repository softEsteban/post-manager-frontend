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

    //register a post
    public registerPost(datos: Post): Observable<Post> {
        const url = this.api + "/posts";
        return this.http.post<Post>(url, datos);
    }

    //get all approved posts by the admin
    public getPubPosts() {
        return this.http.get<Array<any>>(`${this.api}/posts?filter[where][status]=published`)
    }

}
