import { PostService } from './../post.service';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostService) { }

  enteredContent = '';
  enteredTitle = '';

  ngOnInit() {
  }

  onProductAdd(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.setPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
