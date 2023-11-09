import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!:FormGroup
  
  constructor(private FormBuilder:FormBuilder, private Router:Router, private dataService: DataService){
   
  }
  
  ngOnInit(): void {

    this.loginForm = this.FormBuilder.group({
      email: [''],
      password: ['']
    })
  }
  login(){
    // this.http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
    //   const user = res.find((a:any)=>{
    //     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
    //   });
    //   if(user){
    //     alert('Login Succesful');
    //     this.loginForm.reset()
      
    //   }else{
    //     alert("user not found")
    //   }
    // },
    // err=>{
    //   alert("Something went wrong")
    // })
  
  
    this.dataService.getData().subscribe((res:any)=> {
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.password);

      for(let i=0; i < res.length; i++){
        if(this.loginForm.value.email == res[i].email && this.loginForm.value.password == res[i].username){
          alert("data matched.")
        }
        // else {
        //   alert("data not matched.")
        // }
      }
    })
}
// Login(): void {
//   console.log("Login Called..");
//   console.log(JSON.stringify(this.form.value,null, 2));
//   console.log(this.form.value.email);
//   console.log(this.form.value.password);
  
// }
}
