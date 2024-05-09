import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
