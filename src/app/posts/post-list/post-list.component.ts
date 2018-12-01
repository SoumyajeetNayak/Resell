import { PostService } from './../post.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  /* posts = [
    { title: 'title1', content: 'this is the content 1' },
    { title: 'title2', content: 'this is the content 2' },
    { title: 'title3', content: 'this is the content 3' }
  ]; */

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService) { }

  ngOnInit() {
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
