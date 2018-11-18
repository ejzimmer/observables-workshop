import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap, map, filter, distinctUntilChanged, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['../http-client/http-client.component.css']
})
export class UserInputComponent implements OnInit {
  amiibo = new FormControl();
  amiiboForm: FormGroup;
  imgSrc: Observable<string>;

  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.amiiboForm = builder.group({ amiibo: this.amiibo });
  }

  ngOnInit() {
    this.imgSrc = this.amiibo.valueChanges.pipe(
      filter(text => text.length > 2),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(keys => this.search(keys)),
      filter((response: any) => response.amiibo),
      map((response: any) => response.amiibo[0].image)
    )

  }

  search(term) {
    return this.http
      .get(`http://www.amiiboapi.com/api/amiibo/?name=${term}`)
      .pipe(catchError(val => of({})));
  }
}
