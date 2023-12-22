import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      registerEmail: ['', [Validators.email, Validators.required]],
      registerPassword: ['', Validators.required],
      confirmRegisterPassword: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    //TODO register logic
  }
}
