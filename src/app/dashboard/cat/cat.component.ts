import { Component, OnInit } from '@angular/core';
import { CatserService } from 'src/app/_service/catser.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  dataArray;
  constructor(private ser:CatserService) { }

  ngOnInit(): void {
    this.ser.fetchCat()
    .subscribe(res=>{
      this.dataArray=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
      console.log(this.dataArray);
      
    })
    
  }
  edit(cdata){
    console.log(cdata);
    this.ser.setter(cdata);
  }

  delete(id){
    this.ser.deleteCat(id);
  }

}
