export interface AuthedUser {
    datos: UserData;
    tk: string;
}

export interface UserData {
    userName: string,
    passw: string,
    role: string
}