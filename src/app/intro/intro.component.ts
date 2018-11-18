import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  mysteryValue = '??';

  constructor() { }

  ngOnInit() {
  }

  changeMysteryValue() {
    this.mysteryValue = 'Observable';
    setTimeout(() => {
      document.querySelector('.important').classList.add('raised');
    })
  }

}
