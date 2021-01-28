import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css']
})
export class UregComponent implements OnInit {
  fname:any;
  lname:any;
  email:any;
  mnum:any;
  pass:any;
  cpass:any;

  constructor() { }

  ngOnInit(): void {
  }

}
