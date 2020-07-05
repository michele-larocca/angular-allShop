import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli, ApiMsg } from 'src/app/articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  constructor(private httpClient: HttpClient) { }

  getArticoli(description: string){
    return this.httpClient.get<Articoli[]>(`http://localhost:5051/api/articoli/find/byDescription/${description}`);
  }

  getArticoliByCodArt(codart : string) {
    return this.httpClient.get<Articoli>(`http://localhost:5051/api/articoli/find/byCodArt/${codart}`);
  }

  delArticoloByCodArt(codArt: String){
    return this.httpClient.delete<ApiMsg>(`http://localhost:5051/api/articoli/elimina/${codArt}`);
  }
}
