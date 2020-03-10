import { HeroesService } from './../heroes.service';
import { Hero } from './../hero';
import { Observable,Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  heroes$:Observable<Hero[]>; 
  private searchTerms = new Subject<string>();


  constructor(
    private heroService:HeroesService
  ) { }

  ngOnInit():void{
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  search(val):void{
    this.searchTerms.next(val);
    // this.heroService.searchHeroes(val).subscribe(res=>{
    //   console.log(res)
    //   this.heroes$ = res
    // })
  }

}
