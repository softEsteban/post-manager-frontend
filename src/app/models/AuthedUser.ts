export interface AuthedUser {
    data: UserData;
    tk: string;
}

export interface UserData {
    userName: string,
    passw: string,
    role: string
}