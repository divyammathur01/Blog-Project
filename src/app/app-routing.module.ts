import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AblogComponent } from './dashboard/ablog/ablog.component';
import { AddblogComponent } from './dashboard/addblog/addblog.component';
import { AddcatComponent } from './dashboard/addcat/addcat.component';
import { AfooterComponent } from './dashboard/afooter/afooter.component';
import { AheaderComponent } from './dashboard/aheader/aheader.component';
import { CatComponent } from './dashboard/cat/cat.component';
import { CommentComponent } from './dashboard/comment/comment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { UblogComponent } from './dashboard/ublog/ublog.component';
import { UcatComponent } from './dashboard/ucat/ucat.component';
import { UserComponent } from './dashboard/user/user.component';
import { AboutComponent } from './index/about/about.component';
import { BlogComponent } from './index/blog/blog.component';
import { ContactComponent } from './index/contact/contact.component';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { UregComponent } from './index/ureg/ureg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'' , component:IndexComponent , children:[
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'blog' , component:BlogComponent},
    {path:'contact' , component:ContactComponent},
    {path:'ulogin' , component:UloginComponent},
    {path:'reg' , component:UregComponent}
    
  ]},
  {path:'login' , component:LoginComponent},
  {path:'admin' , component:DashboardComponent , children:[
    {path:'' , redirectTo:'default' , pathMatch:'full'},
    {path:'default' , component:DefaultComponent},
    {path:'ablog' , component:AblogComponent},
    {path:'addblog', component:AddblogComponent},
    {path:'addcat' , component:AddcatComponent},
    {path:'afooter' , component:AfooterComponent},
    {path:'aheader' , component:AheaderComponent},
    {path:'cat', component:CatComponent},
    {path:'feed' ,  component:CommentComponent},
    {path:'ublog', component:UblogComponent},
    {path:'ucat' , component:UcatComponent},
    {path:'user' , component:UserComponent}

  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
