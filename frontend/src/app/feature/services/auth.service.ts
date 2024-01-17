import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  public signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest)
  }

  public login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  public storeUser(user: StoredUser): void {
    if (user.jwtToken && user.email) {
      localStorage.setItem('StoredUser', JSON.stringify(user));
      this.isLoggedIn$.next(true);
    }
  }

  public getUser(): StoredUser | null {
    const user = localStorage.getItem('StoredUser');
    return user ? JSON.parse(user) : null 
  }

  public logout(): void {
    localStorage.removeItem('StoredUser');
    this.isLoggedIn$.next(false);
  }
}

type StoredUser = {jwtToken: string, email: string};