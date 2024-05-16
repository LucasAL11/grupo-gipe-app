import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    readonly apiURL = "https://65009f9718c34dee0cd53786.mockapi.io/users"

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(this.apiURL)
    }

    getUserById(id : string) {
        return this.http.get<User>(`${this.apiURL}/${id}`)
    }
}