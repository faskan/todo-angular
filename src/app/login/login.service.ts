import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Account } from './account.model';
import { Login } from './login.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: Login): Observable<Account | null> {
    if(credentials.username == 'admin' && credentials.password == 'admin'){
      return of({firstName: 'Test', lastName: 'User'});
    }
    return throwError(new Error('oops!'));
  }
}
