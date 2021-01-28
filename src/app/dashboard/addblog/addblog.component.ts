import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogserService } from 'src/app/_service/blogser.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
})
export class AddblogComponent implements OnInit {
  blogform: FormGroup;
  constructor(private fb: FormBuilder, private bl: BlogserService) {
    this.blogform = this.fb.group({
      cname: ['', Validators.required],
      bname: ['', Validators.required],
      bdesc: ['', Validators.required],
      bdate: ['', Validators.required],
      bauthor: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  insertBlog() {
    let bData = this.blogform.getRawValue();
    console.log(bData);
    this.bl.insertBlog(bData);
  }
}
