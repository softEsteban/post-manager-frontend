import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    private api = environment.host;

    constructor(
        private http: HttpClient
    ) { }

    public registerUser(datos: User): Observable<User> {
        const url = this.api + "/users";
        return this.http.post<User>(url, datos);
    }


}
