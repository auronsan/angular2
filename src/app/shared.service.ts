import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';

@Injectable()
export class SharedService {
    results : any;


     getPost() {
         this.results = "loading";
        return this.results;
    }
 
    setPost(data){
  this.results = data;
    }

}