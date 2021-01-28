import { Component, OnInit } from '@angular/core';
import { CatserService } from 'src/app/_service/catser.service';
import {Category} from '../../model/category';
@Component({
  selector: 'app-ucat',
  templateUrl: './ucat.component.html',
  styleUrls: ['./ucat.component.css']
})
export class UcatComponent implements OnInit {
  caData:Category;
  constructor(private ser:CatserService) { 
    this.caData=this.ser.getter();
  }

  ngOnInit(): void {
  }

  updateCat(){
    this.ser.updateCat(this.caData)
  }

}
