import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { Login } from 'src/app/user/models/login';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  public message = '';
  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    const register: Login = this.registerForm.value;
    this.userService.register(register).subscribe(
      response => {
        console.log('Successfully registered');
        this.message = response.msg;
        this.router.navigate(['user', 'login']); 
      },
      err => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      },
    );
  }
}
