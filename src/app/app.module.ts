import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
