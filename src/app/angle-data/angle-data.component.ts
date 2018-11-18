import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConversionService } from '../conversion.service';

@Component({
  selector: 'angle-data',
  templateUrl: './angle-data.component.html',
  styleUrls: ['./angle-data.component.css']
})
export class AngleDataComponent implements OnInit, OnChanges {

  @Input() theta: number;

  adjacent: number;
  opposite: number;
  hypotenuse: number;

  sinTheta: number;
  cosTheta: number;
  tanTheta: number;

  constructor( private conversionService: ConversionService ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const degToRad = this.conversionService.degToRad;
    this.adjacent = Math.cos(degToRad(this.theta));
    this.opposite = Math.sin(degToRad(this.theta));
    this.hypotenuse = 1;

    this.sinTheta = Math.sin(degToRad(this.theta));
    this.cosTheta = Math.cos(degToRad(this.theta));
    this.tanTheta = Math.tan(degToRad(this.theta));
  }

}
