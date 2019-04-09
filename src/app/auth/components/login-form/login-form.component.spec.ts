import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {LoginFormComponent} from './login-form.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {UIModule} from '../../../ui/ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthMockService} from '../../services/auth-mock.service';
import {AuthManagerService} from '../../../core/services/auth-manager.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UIModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        AuthMockService,
        AuthManagerService
      ],
      declarations: [
        LoginFormComponent
      ],
    }).compileComponents().then();
  }));

  it('should create login form view', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render header with title', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain('RSS Aggregator');
  });
});
