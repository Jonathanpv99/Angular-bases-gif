
import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

/*@Component({
  selector: 'gifs-search-box',
  template:
  `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="serachTag( txtTagImput.value )"
  #txtTagImput
  >
  `

})  en este ejemplo logramos el objetivo sin viewchild*/

@Component({
  selector: 'gifs-search-box',
  template:
  `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag( )"
  #txtTagImput
  >
  `

})
export class SearchBoxComponent {

  @ViewChild('txtTagImput')
  public tagInput!: ElementRef<HTMLInputElement>;

  /*serachTag( newTag: String ){
    console.log({ newTag })
  } sin viewchild*/

  constructor( private gifsService: GifsService) { }

  searchTag(){
    const newTag= this.tagInput.nativeElement.value;

    this.gifsService.serachTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
