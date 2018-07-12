import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Register } from '../register';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  public bearerToken: any;
  public submitMessage: string;

  constructor(private _authService: AuthenticationService,
    private routerService: RouterService) { }

  ngOnInit() {
  }

  getUserNameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : ' ';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : ' ';
  }

  loginSubmit() {
    if (this.username.value === '' || this.password.value === '') {
      this.submitMessage = 'empty values';
      return;
    }
    const user: Register = new Register(this.username.value, this.password.value);
    this._authService.authenticateUser(user).subscribe(
      res => {
        this.bearerToken = res['token'];
        this._authService.setBearerToken(this.bearerToken);
        this.routerService.routeToDashboard();

        console.log(res['token']);
      },
      err => {
        if (err.status === 403) {
          this.submitMessage = 'Unauthorized';
        } else if (err.status === 404) {
          this.submitMessage = err.message;
        } else {
          this.submitMessage = err.message;
        }
      }
    );
  }
}
