import { Component, OnInit } from '@angular/core';
import { Heroinfo } from './../heroinfo';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.sass']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Heroinfo(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');

  submitted = false;

  onSubmit(e) { e.reset(); console.log(); this.submitted = true; }

  newHero() {
    this.model = new Heroinfo(42, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
