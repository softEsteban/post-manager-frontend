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

    public getAllPosts() {
        return this.http.get<Array<any>>(`${this.api}/posts`)
    }


}