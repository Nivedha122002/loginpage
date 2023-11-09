import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: HttpClient) {}
  
    login(email: any, password: string) {
      
    }
    
  }
 
  
