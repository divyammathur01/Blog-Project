import { Component, OnInit } from '@angular/core';
import { BlogserService } from 'src/app/_service/blogser.service';

@Component({
  selector: 'app-ablog',
  templateUrl: './ablog.component.html',
  styleUrls: ['./ablog.component.css'],
})
export class AblogComponent implements OnInit {
  blogArray;

  constructor(private ser: BlogserService) {}

  ngOnInit(): void {
    this.ser.fetchBlog().subscribe((res) => {
      this.blogArray = res.map((list) => {
        return {
          $key: list.key,
          ...list.payload.val(),
        };
      });
      console.log(this.blogArray);
    });
  }
  editPost(bdta) {
    console.log(bdta);
    this.ser.setter(bdta);
    
  }

  delPost(id) {
    this.ser.delBlog(id);
  }
}
