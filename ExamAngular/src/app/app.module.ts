import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/models/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './dashboard/poll/poll.component';
import { CreateComponent } from './dashboard/create/create.component';
import { PollService } from './dashboard/models/poll.service';
import { FilterPipe } from './dashboard/models/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PollComponent,
    CreateComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
