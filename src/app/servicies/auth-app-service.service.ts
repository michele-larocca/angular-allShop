import { Injectable } from '@angular/core';

const USER_OK = 'michele';
const PASS_OK = '123';

@Injectable({
  providedIn: 'root'
})
export class AuthAppServiceService {

  constructor() { }

  executeLogin(user, password){
    if(user === USER_OK && password === PASS_OK){
      sessionStorage.setItem("user", user);
      return true;
    }

    return false;
  }

  getLoggedUser() {
    let utente = sessionStorage.getItem("user");
    return utente ? utente : "";
  }

  isLogged() {
    return (sessionStorage.getItem("user") != null) ? true : false;
  }

  clearAll() {
    sessionStorage.removeItem("user");
  }
}
