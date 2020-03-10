import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroesService } from './../heroes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  @Input() hero:Hero
  // hero:Hero

  tit:'MY-HEROES'

  constructor(
    private route:ActivatedRoute,
    private heroService: HeroesService,
    private location:Location,
    private router:Router
  ) { }

  ngOnInit() {
    this.getHero()
  }

  getHero():void{
    if(typeof this.route.snapshot.params.id === 'undefined'){
      this.router.navigate(['/'])
    }else{
      this.heroService.getHero(this.route.snapshot.params.id).subscribe(hero =>{
        this.hero = hero[0]
      });
    }
  }

  goBack():void{
    this.location.back()
  }

  save():void{
    this.heroService.updateHero(this.hero).subscribe(_=>{
      this.goBack()
    })
    console.log(this.hero.name)
  }

}
