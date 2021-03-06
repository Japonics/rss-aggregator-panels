import {Component} from '@angular/core';
import {ICredentials} from '../../interfaces/credentials.interface';
import {IUser} from '../../interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthManagerService} from '../../../core/services/auth-manager.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;

  constructor(private _authService: AuthService,
              private _authManagerService: AuthManagerService,
              private _snackBar: MatSnackBar,
              private _router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  /**
   * Handle submit event
   */
  public onSubmit(): void {

    const credentials: ICredentials = this.loginForm.value;

    this._authService
      .login(credentials)
      .subscribe(
        (user: IUser) => {
          this._authManagerService.loginUser(user);
          this._authService.loadToken(user.id);
          this._router.navigate(['/']).then(
            () => {
              this._showMessage(`Welcome, ${user.username}`, 'Bye');
            }
          );
        },
        (message: string) => {
          this._showMessage(message, 'Close');
        }
      );
  }

  private _showMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
