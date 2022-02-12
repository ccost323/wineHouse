import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public message = '';
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const login = this.loginForm.value;
    this.userService.login(login).subscribe(
      resp => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['wines', 'list'], {
          queryParams: {page: 1}
        });
      },
      err => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      },
    );
  }
}
