import { Component, OnInit } from '@angular/core';
import {DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'PokeMarket';

  constructor() { }

  ngOnInit() {
  }
  today: number = Date.now();
}
