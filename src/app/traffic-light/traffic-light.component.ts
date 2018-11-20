import { Component, OnInit } from '@angular/core';
import { LightService } from '../light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  lit = 'green'; // controls the colour of the light - red, orange or green

  constructor(private lightService: LightService) {
  }

  ngOnInit() {
  }

}
