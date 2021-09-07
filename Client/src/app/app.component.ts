import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'بازارگاه سفارشی سازی کالا و خدمات الماس';
  
  products: IProduct [] = [];

  constructor() { }

  ngOnInit(): void {
   
  }
}
