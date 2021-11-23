import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL:string = "http://localhost:3000" 

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
   return this.http.get(`${this.BASE_URL}/user`)
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/user/create`, user)
  }

  getUser(id: any): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/user/${id}`)
  }

  updateUser(id: any, user: User): Observable<User>{
    return this.http.put<User>(`${this.BASE_URL}/user/update?userID=${id}`, user)
  }

  deleteUser(id: any): Observable<User>{
    return this.http.delete<User>(`${this.BASE_URL}/user/delete?userID=${id}`)
  }

}
