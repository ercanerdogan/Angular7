import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post';
import { User } from './user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  postPath:string="https://jsonplaceholder.typicode.com/";
  posts:Post[];
  users:User[];

  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }

  getPosts(){
    this.http.get<Post[]>(this.postPath+ "posts").subscribe(response=>{
      this.posts=response;
    
    });
  }

  getUsers(){
    this.http.get<User[]>(this.postPath+ "users").subscribe(response=>{
      this.users=response;
    
    });
  }

}
