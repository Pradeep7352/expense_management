import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  public userName = "Pradeep Kumar";
  public userEmail = "pradeep@gmail.com"
  constructor() { }

  ngOnInit() {
  }

}
