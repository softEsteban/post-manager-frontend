import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    //get all post requests
    public getAllPosts() {
        return this.http.get<Array<any>>(`${this.api}/posts?filter[where][status]=On%20hold`)
    }

    //delete a selected post
    public deletePost(id : string) {
        return this.http.delete(`${this.api}/posts/${id}`)
    }

    //patch post ready to publish
    public updatePost(id : string) {
        let date= new Date();
        const body = { status: 'published', publishedDate: date.toLocaleDateString()}
        return this.http.patch<Post>(`${this.api}/posts/${id}`, body)
    }


}