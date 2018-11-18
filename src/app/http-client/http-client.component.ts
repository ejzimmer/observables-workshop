import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  amiibo: string;
  imgSrc: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAmiibo() {
  }
}
