import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = 'https://www.googleapis.com/auth/books';
  constructor() { }
}
