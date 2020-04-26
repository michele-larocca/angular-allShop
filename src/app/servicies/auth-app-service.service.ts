import { Injectable } from '@angular/core';

const USER_OK = 'michele';
const PASS_OK = '123';

@Injectable({
  providedIn: 'root'
})
export class AuthAppServiceService {

  constructor() { }

  executeLogin(user, password){
    return user === USER_OK && password === PASS_OK;
  }
}
