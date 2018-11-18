import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-in-angular',
  templateUrl: './rxjs-in-angular.component.html',
  styleUrls: ['./rxjs-in-angular.component.css']
})
export class RxjsInAngularComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('initialising component');
  }

  ngOnInit() {
    this.route.params.subscribe(routes => {
      const colour = `hsl(${routes.colour}, 30%, 60%)`;
      document.querySelector('body').style.backgroundColor = colour;
    });
  }

  changeColour() {
    const hue = Math.round(Math.random() * 255);
    this.router.navigate(['rxjs-in-angular', hue]);
  }
}
