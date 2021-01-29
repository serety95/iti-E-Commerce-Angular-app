import { Person } from './../_model/person';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="https://mearn-stack-backend-test.herokuapp.com/";

  constructor(private httpClient:HttpClient) { }
  register(person:Person){
    console.log(person);
    return this.httpClient.post(`${this.baseUrl}user/register`,person)
  }
  login(person:Person){
    console.log(person);
    
    return this.httpClient.post(`${this.baseUrl}user/login`,{email:person.email,password:person.password})
  }
  checkPassword(person:Person):Boolean{
     
   let x= Boolean(person.password !== person.repeatedPassword) 
   console.log(person.password,person.repeatedPassword,x);
   return x
}

isAuthenticated():boolean{
  if(localStorage.getItem('token')){
    return true;
  }else{
    return false;
  }
}


}
