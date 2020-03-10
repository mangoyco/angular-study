import { HeroesService } from './../heroes.service';
// import { heroesmock } from './../../assets/heroes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  
  Heroes;

  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(heroes =>{
      this.Heroes = heroes.slice(0,4)
      console.log(heroes)
    } );
    // this.getHeroes()
  }

  // getHeroes(): void {
  //   this.Heroes = this.heroesService.getHeroes();
  // }

}
