import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private postService : PostServiceService) { }

  posts: Array<any> = [];
  postToRender : number = 0;

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postToRender = this.postService.postNum;
  }
}
