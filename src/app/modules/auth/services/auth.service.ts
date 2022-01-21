import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData, AuthedUser } from './../../../models/AuthedUser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private host = environment.host;

    constructor(
        private http: HttpClient
    ) { }
    

    //Login- Access
    login(CredentialData: any) {
        return this.http.post<AuthedUser>(`${this.host}/identifyUser`,
        { userName: CredentialData.userName, passw: CredentialData.passw })
        .pipe(
            tap(resp => {
                sessionStorage.setItem("token", resp.tk);
                sessionStorage.setItem("datosUser", JSON.stringify(resp.data))
            })
        );
    }






}