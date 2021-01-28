import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Router } from '@angular/router';

import {UpdBlog} from '../model/updblog';
@Injectable({
  providedIn: 'root'
})
export class BlogserService {
  bData:UpdBlog;
  blogList:AngularFireList<any>;
  constructor(private afdb:AngularFireDatabase , private router:Router) {
    this.blogList=this.afdb.list('Blog');
   }

   insertBlog(blogData){
     this.blogList.push({
       Catname:blogData.cname,
       Blogname:blogData.bname,
       Desc:blogData.bdesc,
       Date:blogData.bdate,
       Author:blogData.bauthor,
     })

   }

   fetchBlog(){
      return this.blogList.snapshotChanges();

   }
   delBlog(id){
    this.blogList.remove(id);
   }

   setter(bldata:UpdBlog){
    this.bData=bldata;
    this.router.navigateByUrl('admin/ublog');

   }

   getter(){
    return this.bData;
   }

   updateBlog(bloDta){
     this.blogList.update(this.bData.$key,{
       Catname:bloDta.Catname,
       Blogname:bloDta.Blogname,
       Desc:bloDta.Desc,
       Date:bloDta.Date,
       Author:bloDta.Author,
     })

   }
}
