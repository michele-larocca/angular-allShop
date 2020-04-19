import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  items = [
    {codart: 'AA34567e231', desc: 'PASTA INTEGRALE PENNE 1 KG', unit: 21, prezzo: 1.23},
    {codart: 'AA34567e231', desc: 'FARINA GRANO TENERO OO DA 1 KG', unit: 65, prezzo: 0.83},
    {codart: 'AA34567e231', desc: 'SUCCO DI FRUTTA - MELOGRANO', unit: 15, prezzo: 1.95},
    {codart: 'AA34567e231', desc: 'BAGNOSCHIUMA DA 0.75 LT', unit: 2, prezzo: 1.55},
    {codart: 'AA34567e231', desc: 'BURRO 250 GR', unit: 12, prezzo: 2.26}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
