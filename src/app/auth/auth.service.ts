import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Account } from '../login/account.model';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private socialAuthService: SocialAuthService) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(() => this.isLoggedIn = true)
  //   );
  // }

  login(credentials: Login): Observable<Account | null> {
    if(credentials.username == 'admin' && credentials.password == 'admin'){
      return of({firstName: 'Test', lastName: 'User'});
    }
    return throwError(new Error('oops!'));
  }
  
  logout(): void {
    this.isLoggedIn = false;
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
