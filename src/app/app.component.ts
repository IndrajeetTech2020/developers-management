import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  username= new FormControl('admin');
  password= new FormControl('');

  constructor(  private router: Router,private _snackBar: MatSnackBar) {
     
   }

  login() {
    console.log("login works");
    
  }
  
  logout() {
  
  }

  ngOnInit() {
   
  }

  posts : any;
  allPost() {
    
      
    }
  
    allPostByMeth() {
      
        
      }

}
