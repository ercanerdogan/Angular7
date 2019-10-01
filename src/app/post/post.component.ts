import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  postPath:string="https://jsonplaceholder.typicode.com/posts";
  posts:Post[];


  ngOnInit() {
    this.http.get<Post[]>(this.postPath).subscribe(response=>{
      this.posts=response;
    
    })
  }

}
