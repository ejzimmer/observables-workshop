import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  lightState = new EventEmitter<string>();

  constructor() { }

  stopTraffic() {
    this.lightState.emit('stopping');
  }

  startTraffic() {
    this.lightState.emit('go');
  }

  notifyStopped() {
    this.lightState.emit('stopped');
  }
}
