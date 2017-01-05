import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderClicked:boolean=false;
  constructor() { }

  ngOnInit() {

  }
  sliderClickedHandle(value){ 
    this.sliderClicked=value.newValue;    
  }
}
