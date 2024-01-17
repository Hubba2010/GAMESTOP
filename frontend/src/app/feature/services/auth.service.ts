import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$ = new BehaviorSubject<User | null>(null);
  public isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getUser());

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest)
  }

  public login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  public storeUser(user: User): void {
      localStorage.setItem('LoggedUser', JSON.stringify(user));
      this.isLoggedIn$.next(true);
  }

  public getUser(): User | null {
    const user = localStorage.getItem('LoggedUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.user$.next(parsedUser);
      return parsedUser;
    }
    return null; 
  }

  public logout(): void {
    localStorage.removeItem('LoggedUser');
    this.user$.next(null);
    this.isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }
}
