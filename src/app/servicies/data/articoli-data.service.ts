import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli } from 'src/app/articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  constructor(private httpClient: HttpClient) { }

  getArticoli(description: string){
    return this.httpClient.get<Articoli[]>(`http://localhost:5051/api/articoli/find/byDescription/${description}`);
  }
}
