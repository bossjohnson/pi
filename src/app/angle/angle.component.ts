import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'angle',
  templateUrl: './angle.component.html',
  styleUrls: ['./angle.component.css']
})
export class AngleComponent implements OnInit {

  theta: number = 45;

  constructor() { }

  ngOnInit() {
  }

}
