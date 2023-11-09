
import { DataService } from './data.service';

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  pageTitle:string = 'Angular HTTP Client';
  data: any = [];
  http: any;
  apiUrl: any;
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
      console.log(this.data);
    })
    
  }
  
}
