import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-using-observables',
  templateUrl: './using-observables.component.html',
  styleUrls: ['./using-observables.component.css']
})
export class UsingObservablesComponent implements OnInit {
  myObservable = of('good', 'news', 'everyone');

  constructor() { }

  ngOnInit() {
    
  }
}
