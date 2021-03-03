import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = []
  posts:any = []
  isLoadingResults = true;

  constructor (
    public api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.api.getProfile(params.id).subscribe(result => {
        this.user = result;
      })

      this.api.getPost(params.id).subscribe(result => {
        this.isLoadingResults = false
        this.posts = result
      })
    })
  }

}
