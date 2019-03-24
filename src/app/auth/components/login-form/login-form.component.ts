import {Component} from '@angular/core';
import {AuthMockService} from '../../services/auth-mock.service';
import {ICredentials} from '../../interfaces/credentials.interface';
import {IUser} from '../../interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthManagerService} from '../../../core/services/auth-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;

  constructor(private _authService: AuthMockService,
              private _authManagerService: AuthManagerService,
              private _router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  public onSubmit(): void {

    const credentials: ICredentials = this.loginForm.value;

    this._authService
      .login(credentials)
      .subscribe(
        (user: IUser) => {
          this._authManagerService.loginUser(user);
          this._router.navigate(['.'])
        },
        () => {}
      );
  }
}
