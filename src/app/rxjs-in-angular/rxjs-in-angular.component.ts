import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rxjs-in-angular',
  templateUrl: './rxjs-in-angular.component.html',
  styleUrls: ['./rxjs-in-angular.component.css']
})
export class RxjsInAngularComponent implements OnInit {
  watchMe = new FormControl();
  eyesForm: FormGroup;

  get eyes() { return document.querySelectorAll('.eye'); }

  constructor(private route: ActivatedRoute, private router: Router, private builder: FormBuilder) {
    console.log('initialising component');

    this.eyesForm = builder.group({ watchMe: this.watchMe });
  }

  ngOnInit() {
  }

  changeColour() {
    const hue = Math.round(Math.random() * 255);
    this.router.navigate(['rxjs-in-angular', hue]);
  }

  lookAtMe() {
    this.rotateEyes();
  }

  rotateEyes(rotation = '.1turn') {
    this.eyes.forEach((eye: HTMLElement) => eye.style.transform = `rotate(${rotation})`);
  }
}
