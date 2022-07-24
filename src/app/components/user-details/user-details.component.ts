// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { GithubService } from 'src/app/service/github.service';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent implements OnInit {
//   username!: string;
//   userDetail: any;
//   constructor(private active : ActivatedRoute ,
//               private githubService:GithubService,
//               private route : Router) { }

//   ngOnInit(): void {
//     this.active.params.subscribe(params => {
//       this.username = params['id'];
//       console.log('params =', this.username)
//     })

//     this.githubService.getUser(this.username).subscribe({
//       complete: () => { console.log('succesfully done!')},
//       error : () => {
//         // navigate back to the search bar
//         alert('you have entered a wrong username!');
//         this.route.navigate(['search']);
//       },
//       next : (data : any = []) => {
//         this.userDetail = data;
//         console.log(this.userDetail);

//       },
//     })
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  repo!: string;
  userDetail: any;
  constructor(private active : ActivatedRoute ,
              private githubService:GithubService,
              private route : Router) { }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.repo = params['id'];
      console.log('params =', this.repo)
    })

    this.githubService.getUser(this.repo).subscribe({
      complete: () => { console.log('succesfully done!')},
      error : () => {
        // navigate back to the search bar
        alert('you have entered a wrong word!');
        this.route.navigate(['search']);
      },
      next : (data : any = []) => {
        this.userDetail = data;
        console.log(this.userDetail);

      },
    })
  }

}
