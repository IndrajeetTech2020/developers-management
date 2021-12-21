import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SearchService} from 'src/app/search-api.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    
  ]
})

export class SearchComponent implements OnInit {
  public data;
  public result;
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.result = {
      "login": "",
      "id": "",
      "node_id": "=",
      "avatar_url": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "gravatar_id": "",
      "url": "",
      "html_url": "",
      "followers_url": "",
      "following_url": "",
      "gists_url": "",
      "starred_url": "",
      "subscriptions_url": "",
      "organizations_url": "",
      "repos_url": "",
      "events_url": "",
      "received_events_url": "",
      "type": "",
      "site_admin": false,
      "name": "Bukrs",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": "",
      "twitter_username": null,
      "public_repos": "",
      "public_gists": "",
      "followers": "",
      "following": "",
      "created_at": "",
      "updated_at": ""
    };
  }
  searchProfile(idPrfName : string){
    console.log("Search clicked");
    console.log(idPrfName);
    if (idPrfName == ""){
      idPrfName = "IndrajeetTech2020";
    }
    //debugger;
    this._searchService.getProfile(idPrfName).subscribe(
           data => { this.result = data },         
           err => console.error(err),
           () => console.log('done loading foods')
         );
    //this.result = this.data;
  }
}
