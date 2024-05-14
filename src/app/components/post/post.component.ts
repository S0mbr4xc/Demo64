import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: any
  photos: any
  comments: any

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.getPost().subscribe(data => {
      this.post = data
    })

    this.postService.getPhotos().subscribe(data => {
      this.photos = data
    })

    this.postService.getComments().subscribe(data => {
      this.comments = data
    })
  }

  mostrarInfo(msg: any){
    const id = msg.id
    const div = document.getElementById(`info-${id}`)

    if(div){
      if(div.style.display ===  'none'){
        div.style.display = 'block'
      }else{
        div.style.display = 'none'
      }
    }
  }
}