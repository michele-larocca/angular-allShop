import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeAppServiceService {

  constructor(private httpClient: HttpClient) { }

  getGreating(){
    return this.httpClient.get('http://www.mocky.io/v2/5ea6b704320000095bac2cae');
  }

}
