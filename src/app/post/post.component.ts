import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  postPath: string = "https://jsonplaceholder.typicode.com/";
  posts: Post[];
  users: User[];

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
       this.getPosts(params["userId"]);
      // console.log(params["userId"])
    })
  }

  getPosts(userid) {
    debugger;
      if (userid) {
        let newPath = this.postPath + "posts?userId=" + userid;

        this.http.get<Post[]>(newPath).subscribe(response => {
          this.posts = response;
        })
      }
      else {
            this.http.get<Post[]>(this.postPath + "posts").subscribe(response => {
              this.posts = response;
            })
      } 
    }

    getUsers(){
      this.http.get<User[]>(this.postPath + "users").subscribe(response => {
        this.users = response;

      });
    }

  }
