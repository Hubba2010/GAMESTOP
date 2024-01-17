import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError, throwError } from 'rxjs';
import { ProductListTypesEntries } from 'src/app/const/product-list-types';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  public readonly subscription = new Subscription();
  public invalidData = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    this.subscription.add(
      this.authService.login(this.loginForm.value).pipe(
        catchError(error => {
          console.error('Login failed: ', error);
          this.invalidData = true;
          return throwError('Invalid user data')
        }
      ))
      .subscribe((response: any) => {
        console.log(response);
        if (response.jwtToken) {
          const user = {
            jwtToken: response.jwtToken,
            email: this.loginForm.get('email')?.value
          }
          
          alert('LOGIN SUCCESSFUL');
          this.router.navigate(['/product-list'], {queryParams: {productType: ProductListTypesEntries.BEST_DEALS}});
        }
        
        
      })
    )
    
  }
}
