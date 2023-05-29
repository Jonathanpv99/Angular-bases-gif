import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './components/home-pages/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePagesComponent,
  ]
})
export class GifsModule { }
