import { heroesmock } from './../assets/heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroesUrl = 'api/heroes'  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    
  ) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  
  getHeroes(): Observable<Hero[]> {
    // console.log(this.http.get<Hero[]>(this.heroesUrl))
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('请求所有英雄')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
    // return of(heroesmock);
  }

  getHero(id:number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero>(url).pipe(tap(e=>{
      this.log(`请求id为${id}的英雄`)
    }),catchError(this.handleError<Hero>(`getHero id=${id}`)))
  }

  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`增加了新英雄id:${newHero.id}名字:${newHero.name}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  delHero(hero: Hero|number):Observable<Hero>{
    let id = typeof hero === 'number' ? hero : hero.id
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<Hero>(url,this.httpOptions).pipe(
      tap(_=>{this.log(`删除了id为${id}的英雄`)}),
      catchError(this.handleError<Hero>('deleteHero')))
  }

  updateHero(hero:Hero){
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_=>{this.log(`id为${hero.id}的英雄改名为${hero.name}`)}),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
