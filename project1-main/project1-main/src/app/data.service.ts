import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  constructor(private httpClient: HttpClient) { }
  getData(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<any>(url);
  }

    

  
  }




