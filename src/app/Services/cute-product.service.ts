import { Injectable } from '@angular/core';
import {Response} from "../modules/Response";
import {Observable} from "rxjs";
import { HttpClient,  } from '@angular/common/http';
import { Cuteproduct } from '../modules/Cuteproduct';

@Injectable({
  providedIn: 'root'
})
export class CuteProductService {

  constructor(private httpClient: HttpClient) { }


  public getProducts(): Observable<Response> {
    return this.httpClient.get<Response>("https://dummyjson.com/products");
}

public getProductsOfCategory(category: string): Observable<Response> {
    return this.httpClient.get<Response>(`https://dummyjson.com/products/category/${category}`)
  }
  public getBySearch(search : string | null){
    return this.httpClient.get<Response>('https://dummyjson.com/products/search?q='+search);
  }
  public getProductById(productId: Number): Observable<Cuteproduct> {
    return this.httpClient.get<Cuteproduct>(`https://dummyjson.com/products/${productId}`)
  }
  searchMovies(searchProductvalue: string){
    return this.httpClient.get<Response>('https://dummyjson.com/products/search?q='+searchProductvalue);

  }
  getProductByKey(key:any){
    return this.httpClient.get('https://dummyjson.com/products/search?q='+key)
  }
}
