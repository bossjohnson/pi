import { Injectable } from '@angular/core';

@Injectable()
export class ConversionService {

  constructor() { }

  degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  radToDeg(rad: number): number {
    return rad / (Math.PI / 180);
  }

}
