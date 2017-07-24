import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './shared.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MainComponent } from './main.component';
import { SideComponent } from './side.component';
import { PostComponent } from './post.component';
import { ContactusComponent } from './contactus.component';
import { ReadComponent } from './read.component';
import { Page404Component } from './page404.component';


//import { MySharedService } from './shared.service';

const appRoutes: Routes = [
    {
      path: ':id',
      redirectTo: ':id',
      pathMatch: 'full',
    },
   {path: '',
    redirectTo: 'Main',
    pathMatch: 'full'},
  { path: 'Main', component: MainComponent ,
data: { active: 0 }},
  { path: 'Post', component: PostComponent,
data: { active: 0 } },
  {
    path: 'Contact Us',
    component: ContactusComponent,
    data: { active: 2 },
    
  },
   {
    path: ':id',
    component: ReadComponent,
    data: { active: 0 },
    
  },
  { path: '**', component: Page404Component }
];


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ContactusComponent,
    Page404Component,
    ReadComponent,
    PostComponent,
    SideComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  onMain: Boolean;
}
