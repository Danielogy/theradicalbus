import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostServiceService) { }

  posts : Array<any> = [];
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    window.setTimeout(this.mirrorPosts, 100);
  }

  mirrorPosts() : void{
    const post = document.querySelectorAll('.post');
    post.forEach((p, index) => {
      if (index % 2 === 1)
        p.classList.toggle('mirror');
    });
  }

  selectedIndex(i : number) : void{
    this.postService.selectedIndex(i);
    window.scrollTo(0, 0);
  }
}
