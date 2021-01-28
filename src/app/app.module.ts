import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { ContactComponent } from './index/contact/contact.component';
import { BlogComponent } from './index/blog/blog.component';
import { UregComponent } from './index/ureg/ureg.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { AheaderComponent } from './dashboard/aheader/aheader.component';
import { AfooterComponent } from './dashboard/afooter/afooter.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { AddblogComponent } from './dashboard/addblog/addblog.component';
import { AblogComponent } from './dashboard/ablog/ablog.component';
import { UblogComponent } from './dashboard/ublog/ublog.component';
import { AddcatComponent } from './dashboard/addcat/addcat.component';
import { CatComponent } from './dashboard/cat/cat.component';
import { UcatComponent } from './dashboard/ucat/ucat.component';
import { UserComponent } from './dashboard/user/user.component';
import { CommentComponent } from './dashboard/comment/comment.component';
import { CatserService } from './_service/catser.service';
import { BlogserService } from './_service/blogser.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from 'src/environments/environment';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    UregComponent,
    UloginComponent,
    AheaderComponent,
    AfooterComponent,
    DefaultComponent,
    AddblogComponent,
    AblogComponent,
    UblogComponent,
    AddcatComponent,
    CatComponent,
    UcatComponent,
    UserComponent,
    CommentComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CatserService, BlogserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
