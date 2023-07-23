import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  C: number;
  F: number;

  ngOnInit() {
    // C = (F − 32) × 5/9
    this.C =(this.F - 32)*5/9;

    // F = C*9/5 + 32
    this.F =this.C*9/5+32;
  }

  convertToCelsius() {
    let x = (this.F - 32) * 5 / 9;
    this.C = +x.toFixed(1);
  }

  convertToFahrenheit() {
    let x = (this.C * 9 / 5) + 32;
    this.F = +x.toFixed(1);
  }

}
