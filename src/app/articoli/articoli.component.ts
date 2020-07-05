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

export class ApiMsg {
  constructor(
    public code: string,
    public message: string
  ) {}
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
  message: string = '';

  constructor(private articoliData: ArticoliDataService) { }

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable(){
    this.articoliData.getArticoliByCodArt(this.filter).subscribe(
      response => this.setTablesItems([response]),
      error => {
        console.error("Nessun Articolo trovato by codArt, esecuzione ricerca by description");

        this.articoliData.getArticoli(this.filter).subscribe(
          response => this.setTablesItems(response),
          error => {
            const { error : { codice = undefined} = {}} = error || {};

            if(codice == 404)
              this.resetTable();
            else 
              console.error("Error Articoli.getArticoli ", error);
          }
        );
      }
    )
  }

  setTablesItems(items){
    this.items = items;
    this.totalItems = this.items ? this.items.length : 0;

    if(this.pageSelected > 1 && this.totalItems <= ((this.pageSelected-1) * this.rowDisplayed)){
      this.pageSelected = 1;
    }
  }

  resetTable(){
    this.items = [];
    this.totalItems = 0;
    this.pageSelected = 1;
  }

  delete(codArt: string){
    this.articoliData.delArticoloByCodArt(codArt).subscribe(
      response => {
        this.message = response.message;
        this.refreshTable();
      }
    );
  }

  edit(){
    console.log('delete');
  }

}
