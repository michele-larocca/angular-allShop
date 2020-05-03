import { Component, OnInit } from '@angular/core';
import { ArticoliDataService } from '../servicies/data/articoli-data.service';

export class Articoli {
  constructor(
    public codArt: string,
    public descrizione: string,
    public pzCart: number,
    public prezzo: number,
    public idStatoArt: boolean,
    public dataCreaz: Date
  ){
    
  }
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {
  
  totalItems: number = 0;
  items : Articoli[] = [];

  pageSelected = 1;
  rowDisplayed = 10;

  filter: string = 'ACQUA';

  constructor(private articoliData: ArticoliDataService) { }

  ngOnInit(): void {
    this.articoliData.getArticoli(this.filter).subscribe(
      (response) => {
        this.items = response;
        this.totalItems = this.items ? this.items.length : 0;
      }
    )
  }

}
