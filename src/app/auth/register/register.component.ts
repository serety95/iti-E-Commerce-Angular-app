import { AuthService } from './../../_services/auth.service';

import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/_model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
person:Person={email:'',password:'',repeatedPassword:''};
  constructor(private authService:AuthService,private router:Router){}

ngOnInit(): void {
    
}
onSubmit(){
  this.authService.register(this.person).subscribe(
    (response)=>{console.log(response);
      this.router.navigate(['/login']);
    },
    (err)=>{console.log(err);
    },
    ()=>{}
  )
}

passwordNotMatch(){
    
    return this.authService.checkPassword(this.person)
  }
  
}
