import { Component,OnInit, OnDestroy } from '@angular/core';
import {SharedService} from './shared.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'readcomponent',
  templateUrl: './read.component.html',
})
export class ReadComponent implements OnInit, OnDestroy{
    loader : boolean;
    index = 0;
    posts : any;
    post: any;
    private sub: any;
   constructor(private http: HttpClient,private  _sharedService: SharedService,private route:ActivatedRoute) {
      this.posts = _sharedService.getPost();
      this.index = this.route.snapshot.params['id'];
      if(this.posts=="loading"){
      console.log('aaa2');
      this.http.get('https://kuboseinz.co/auronsanlab/wp-json/wp/v2/posts').subscribe(data => {
      // Read the result field from the JSON response.
      this.posts = data;
      this.post = this.posts[this.index].content;
      this._sharedService.setPost(data);
      console.log(this.index);
      this.loader = false;
      });

      }else{
      this.post = this.posts[this.index].content;
      console.log(this.index);
      this.loader = false;
      }

      
  }
    ngOnInit() {
    this.loader = true;
    this.sub = this.route.params.subscribe(params => {
      this.index = this.route.snapshot.params['id'];
      this.post = this.posts[this.index].content;
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

