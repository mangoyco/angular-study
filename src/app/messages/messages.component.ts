import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  color = 'blue'

  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('dom',document)
  }

}
