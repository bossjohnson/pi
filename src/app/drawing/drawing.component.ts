import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { ConversionService } from '../conversion.service';

@Component({
  selector: 'drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit, OnChanges{

  @Input() theta: number;

  ctx: CanvasRenderingContext2D;

  constructor(
    private conversionService: ConversionService,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit() {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.draw();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.theta.firstChange) {
      this.draw();
    }
  }

  draw() {
    const ctx = this.ctx,
      degToRad = this.conversionService.degToRad,
      num = this.decimalPipe.transform.bind(this.decimalPipe);

    let quadrant;
    if (this.theta <= 90) {
      quadrant = 1;
    } else if (this.theta <= 180) {
      quadrant = 2;
    } else if (this.theta <= 270) {
      quadrant = 3;
    } else {
      quadrant = 4;
    }

    /* clear the canvas */
    ctx.clearRect(0, 0, 300, 300);

    /* unit circle */
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, degToRad(360));
    ctx.stroke();


    /* adjacent side */
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(150, 150);
    const lengthX = Math.cos(degToRad(this.theta)) * 150;
    ctx.lineTo(150 + lengthX, 150);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    ctx.fillText(num((lengthX / 150).toString()), 150 + lengthX / 2, 160);

    /* opposite side */
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    const lengthY = Math.sin(degToRad(this.theta)) * 150;
    ctx.moveTo(150 + lengthX, 150);
    ctx.lineTo(150 + lengthX, 150 - lengthY);
    ctx.stroke();

    ctx.fillStyle = 'green';
    ctx.fillText(num((lengthY / 150).toString()), 150 + lengthX + 5, 160 - lengthY / 2);

    /* hypotenuse */
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(150 + lengthX, 150 - lengthY);
    ctx.lineTo(150, 150);
    ctx.stroke();

    ctx.fillStyle = 'red';
    const hOffsetX = (quadrant === 1 || quadrant === 4) ? -20 : 10;
    ctx.fillText('1', 150 + lengthX / 2 + hOffsetX, 160 - lengthY / 2);
  }

}
