import { Component, OnInit } from '@angular/core';
import { LightService } from '../light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  lit = 'green';

  constructor(private lightService: LightService) {
  }

  ngOnInit() {
    this.lightService.lightState.subscribe((state) => {
      if (state === 'stopping') { this.stop(); }
      else if (state === 'go') { this.go(); }
    });
  }

  stop() {
    this.lit = 'orange';
    setTimeout(() => {
      this.lit = 'red';
      setTimeout(this.lightService.notifyStopped.bind(this.lightService), 500);
    } , 3000);
  }

  go() {
    setTimeout(() => {
      this.lit = 'green';
    }, 500); 
  }

}
