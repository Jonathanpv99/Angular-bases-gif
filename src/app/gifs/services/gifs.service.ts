

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey:     string = 'Bh90PM4ugaOvGAgQmCOPUyTW48Xm4gjV';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]; //retorna una copia del arreglo original para no alterar el primero
  }

  private organizeHistory( tag: string ){
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag);
      //la funcion de arriba recorre el arreglo de historial y con la landa lo rellena
      //solamente con los datos que son diferentes al tag que estamos comparando
    }

    this._tagsHistory.unshift( tag );//inserta el tag al inicio
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory) );
  }

  private loadLocalStorage(): void {
    if( !localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

    if ( this._tagsHistory.length === 0 )return;
    this.serachTag( this._tagsHistory[0] );
  }

  serachTag( tag: string ):void {
    if( tag.length === 0)return;
    this.organizeHistory( tag );

    const params = new HttpParams()
       .set('api_key', this.apiKey)
       .set('limit', '10')
       .set('q',tag)


    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`,{ params })
      .subscribe( resp => {

        this.gifList = resp.data;
      });

    /*fetch('https://api.giphy.com/v1/gifs/search?api_key=Bh90PM4ugaOvGAgQmCOPUyTW48Xm4gjV&q=goku&limit=12')
      .then( resp => resp.json() )
      .then( data => console.log(data) );*/
  }



}
