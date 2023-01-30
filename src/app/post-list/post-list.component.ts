
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  isOpen:String = "";
  affiche(id:string):void{this.isOpen=id;}

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    //this.posts = this.PostService.getPosts();
  }
}
