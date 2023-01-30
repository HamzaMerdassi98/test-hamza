import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    new Post('1', 'Post 1', 'content du post 1'),
    new Post('2', 'Post 2', 'content du post 2'),
    new Post('3', 'Post 3', 'content du post 3'),
    new Post('4', 'Post 4', 'content du post 4')
  ];
  private apiUrl = 'http://localhost:3000/post';

  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

 /* getPosts() {
    return this.posts;
  } */

  getPost(id: string) {
    return this.posts.find(post => post._id === id);
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  updatePost(post: Post) {
    const index = this.posts.findIndex(p => p._id === post._id);
    this.posts[index] = post;
  }

  deletePost(id: string) {
    this.posts = this.posts.filter(post => post._id !== id);
  }
}

