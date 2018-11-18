import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { UsingObservablesComponent } from './using-observables/using-observables.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { UserInputComponent } from './user-input/user-input.component';
import { RxjsInAngularComponent } from './rxjs-in-angular/rxjs-in-angular.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'using-observables',
    component: UsingObservablesComponent
  },
  {
    path: 'http-client',
    component: HttpClientComponent
  },
  {
    path: 'rxjs-in-angular/:colour',
    component: RxjsInAngularComponent
  },
  {
    path: 'rxjs-in-angular',
    component: RxjsInAngularComponent
  },
  {
    path: 'event-emitters',
    component: EventEmittersComponent
  },
  {
    path: 'user-input',
    component: UserInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
