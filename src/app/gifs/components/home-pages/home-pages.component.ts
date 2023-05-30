import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
})
export class HomePagesComponent {

  constructor( private gifService: GifsService ){}

  get gifs(): Gif[]{
    return this.gifService.gifList;
  }

}
