import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm!: FormGroup;
  public readonly subscription = new Subscription();
  public submitted = false;

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
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator}
    )
  }

  private passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
    } else {
      fg.get('confirmPassword')?.setErrors(null);
    }
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("!!! INVALID USER DATA !!!");
      return;
    }

    this.subscription.add(
      this.authService.signup(this.registerForm.value).pipe(
        catchError(err => {
          alert("ERROR REGISTERING NEW USER");
          throw 'Error registering new user. Please try again';
        })
      ).subscribe((response) => {
        alert("USER REGISTERED SUCCESSFULLY");
        this.router.navigate(['/login']);
      })
    )
    
  }
}
