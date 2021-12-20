import { Component, OnInit } from '@angular/core';
import { RestApiService } from "./rest-api.service";
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

  constructor( public restApiService : RestApiService , private router: Router,private _snackBar: MatSnackBar) {
     this.restApiService.loggedIn= false;
   }

  login() {
    console.log("login works");
    this.restApiService.login(this.username.value , this.password.value);
    
    if (this.restApiService.accessToken == null) {
      
    }
  }
  
  logout() {
    this.restApiService.logout();
  }

  ngOnInit() {
   //this.allPost();
   this.allPostByMeth();
  }

  posts : any;
  allPost() {
    console.log("getPosRes works");
    this.restApiService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
      
    }
  
    allPostByMeth() {
      console.log("post PosRes works");
      this.restApiService.getAllPostsByPostMeth().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts)
      });
        
      }

}
