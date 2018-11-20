import { Component, OnInit } from '@angular/core';
import { LightService } from '../light.service';

@Component({
  selector: 'app-pedestrian-light',
  templateUrl: './pedestrian-light.component.html',
  styleUrls: ['./pedestrian-light.component.css']
})
export class PedestrianLightComponent implements OnInit {
  state = 'stop';
  light = false; // this controls the red light on the button. 

  constructor(private lightService: LightService) { }

  ngOnInit() {
    this.lightService.lightState.subscribe((state) => {
      if (state === 'stopped') { this.allowWalk() }
    });
  }

  pressButton() {
    this.light = true;
    this.lightService.stopTraffic();
  }

  allowWalk() {
    this.light = false;
    this.state = 'walk';

    setTimeout(() => {
      this.state = 'stopping';
      setTimeout(() => {
        this.state = 'stop';
        this.lightService.startTraffic();
      }, 3000);
    }, 10000);
  }

}
