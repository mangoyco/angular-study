import { Hero } from './../hero';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  heroes$:Observable<Hero[]>

  constructor() { }

  ngOnInit() {
  }

  search(val):void{
    console.log(val)
  }

}
