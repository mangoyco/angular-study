import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../heroes.service'
import { Hero } from '../hero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  title = 'My-heroes';
  arr:number[] = [1,2,3]
  heroes;
  tt = true
  condition = true
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor(
    private heroesService:HeroesService,
    private router:Router) { }

  ngOnInit() {
    this.getHeroList()
  }

  getHeroList():void{
    this.heroesService.getHeroes().subscribe(heroes =>{
      this.heroes = heroes
    } );
  }

  toDetail(id){
    this.router.navigate(['/detail',id])
  }

  addNewHero(name:string){
    if(!name.trim()){
      alert('不能为空串')
      return
    }
    this.heroesService.addHero({name} as Hero).subscribe(res=>{
      this.heroes.push(res)
      console.log(res)
    })
  }

  deleteHero(id:number,e:any):void{
    this.heroesService.delHero(id).subscribe(_=>{
      // this.getHeroList()
      this.heroes = this.heroes.filter(ele=>ele.id != id)
    })
    e.stopPropagation()
  }

}
