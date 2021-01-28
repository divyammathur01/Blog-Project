import { Component, OnInit } from '@angular/core';
import { BlogserService } from 'src/app/_service/blogser.service';
import {UpdBlog } from '../../model/updblog';

@Component({
  selector: 'app-ublog',
  templateUrl: './ublog.component.html',
  styleUrls: ['./ublog.component.css']
})
export class UblogComponent implements OnInit {
  bloData:UpdBlog;
  constructor(private ser:BlogserService) {
    this.bloData=this.ser.getter();
   }

  ngOnInit(): void {
  }

  updateBlog(){
    this.ser.updateBlog(this.bloData);
    
  }

}
