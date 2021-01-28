import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}  from '@angular/fire/database';
import { Router } from '@angular/router';

import {Category} from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CatserService {
  catData:Category;
  catList:AngularFireList<any>;
  constructor(private db:AngularFireDatabase , private router:Router) { 
    this.catList=this.db.list('category');
  }

  insertCat(cData){
    this.catList.push({
      cname:cData.catname,
      cdate:cData.catdate,
      cdesc:cData.catdesc
    })
    
  }

  fetchCat(){
    return this.catList.snapshotChanges();
  }

  deleteCat(id){
    this.catList.remove(id);

  }

 setter(cdata:Category){
  this.catData=cdata;
  this.router.navigateByUrl('admin/ucat');
 }

 getter(){
  return this.catData;
 }

 updateCat(cateData){
  this.catList.update(this.catData.$key,{
    cname:cateData.cname,
    cdesc:cateData.cdesc,
    cdate:cateData.cdate,
  })
 }
}
