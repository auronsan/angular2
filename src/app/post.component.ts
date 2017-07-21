import { Component, Input ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
@Component({
  selector: 'postcomponent',
  templateUrl: './post.component.html',
})
export class PostComponent {
  
  results: any;
  constructor(private http: HttpClient,private  _sharedService: SharedService) {
    this.results = _sharedService.getPost();
      if(this.results=="loading"){
      this.http.get('https://kuboseinz.co/auronsanlab/wp-json/wp/v2/posts').subscribe(data => {
      // Read the result field from the JSON response.
      this._sharedService.setPost(data);
      this.results = data;
   
    });  
      }else{

      }  

    
    
  }
  
  }
  


