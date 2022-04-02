import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData, AuthedUser } from '../models/AuthedUser';
import { User } from 'src/app/models/User';

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
                sessionStorage.setItem("token", resp.tk.toString());
                sessionStorage.setItem("datos", JSON.stringify(resp.datos))
            })
        );
    }

    //Get user data
    get userData() {
        const userData = sessionStorage.getItem("datos") || ""
        return JSON.parse(userData) as UserData
    }


    //Delete session
    private deleteSession() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("datos");
    }

    public logoutSystem() {
        this.deleteSession();
    }



}