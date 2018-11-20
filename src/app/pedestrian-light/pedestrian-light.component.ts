import { Component, OnInit } from '@angular/core';
import { LightService } from '../light.service';

@Component({
  selector: 'app-pedestrian-light',
  templateUrl: './pedestrian-light.component.html',
  styleUrls: ['./pedestrian-light.component.css']
})
export class PedestrianLightComponent implements OnInit {
  state = 'stop'; // this controls the walk/don't walk (stop = don't walk, walk = walk, stopping = flashing don't walk)
  light = false; // this controls the red light on the button. 

  constructor(private lightService: LightService) { }

  ngOnInit() {
  }

  pressButton() {
    this.light = true;
  }

}
