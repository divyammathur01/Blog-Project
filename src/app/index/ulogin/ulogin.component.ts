import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
  user:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
  }

}
