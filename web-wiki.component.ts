import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service'; 
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-web-wiki',
  templateUrl: './web-wiki.component.html',
  styleUrls: ['./web-wiki.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class WebWikiComponent implements OnInit  {
  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          console.log(response)
          this.posts = response;
        });
  }
}
