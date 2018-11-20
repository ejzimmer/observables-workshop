import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { UsingObservablesComponent } from './using-observables/using-observables.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInputComponent } from './user-input/user-input.component';
import { RxjsInAngularComponent } from './rxjs-in-angular/rxjs-in-angular.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { PedestrianLightComponent } from './pedestrian-light/pedestrian-light.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    UsingObservablesComponent,
    HttpClientComponent,
    UserInputComponent,
    RxjsInAngularComponent,
    EventEmittersComponent,
    TrafficLightComponent,
    PedestrianLightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
