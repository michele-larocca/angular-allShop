import { Component, OnInit } from '@angular/core';

class Articoli {
  constructor(
    public codart: string,
    public desc: string,
    public unit: number,
    public prezzo: number,
    public isActive: boolean,
    public date: Date
  ){
    
  }
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  items = [
    new Articoli('AA34567e231','PASTA INTEGRALE PENNE 1 KG', 21,1.23, true, new Date),
    new Articoli('AA34567e231', 'FARINA GRANO TENERO OO DA 1 KG',65,0.83, false, new Date),
    new Articoli('AA34567e231', 'SUCCO DI FRUTTA - MELOGRANO',15,1.95, true, new Date),
    new Articoli('AA34567e231', 'BAGNOSCHIUMA DA 0.75 LT',2,1.55, false, new Date),
    new Articoli('AA34567e231', 'BURRO 250 GR',12,2.26, true, new Date),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
