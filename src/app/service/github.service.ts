import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url : string = 'https://api.github.com/users/';
  constructor(private http : HttpClient) { }
  getUser(username : string) {
    //https://api.github.com/users/username

   return this.http.get(this.url + username);
  }

}

// export class GithubService {
//   url : string = 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}';
//   constructor(private http : HttpClient) { }
//   getUser(repositories : string) {
//     //https://api.github.com/users/username

//    return this.http.get(this.url + repositories);
//   }

// }
