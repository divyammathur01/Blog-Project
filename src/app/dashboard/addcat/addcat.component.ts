import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { CatserService } from 'src/app/_service/catser.service';


@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {
  catform:FormGroup;
  constructor( private fb:FormBuilder , private cat:CatserService) {
    this.catform=this.fb.group({
      'catname':['',Validators.required],
      'catdesc':['',Validators.required],
      'catdate':['',Validators.required]
    })

    
   }

  ngOnInit(): void {
  }
  insertCat(){
    let data = this.catform.getRawValue();
    console.log(data);
    this.cat.insertCat(data);
    
  }

}
