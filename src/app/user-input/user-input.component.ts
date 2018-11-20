import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap, map, filter, distinctUntilChanged, catchError, skip, throttleTime, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['../http-client/http-client.component.css', './user-input.component.css']
})
export class UserInputComponent implements OnInit {
  amiibo = new FormControl();
  amiiboForm: FormGroup;
  imgSrc: Observable<string>;

  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.amiiboForm = builder.group({ amiibo: this.amiibo });
  }

  ngOnInit() {
  }

  search(term) {
    return this.http
      .get(`http://www.amiiboapi.com/api/amiibo/?name=${term}`)
      .pipe(catchError(val => of({})));
  }
}
