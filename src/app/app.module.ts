import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './common/login-header/login-header.component';
import { DashboardHeaderComponent } from './common/dashboard-header/dashboard-header.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    DashboardHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
