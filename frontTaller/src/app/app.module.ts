import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { TipsListComponent } from './tips-list/tips-list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { RecomendacionesListComponent } from './recomendaciones-list/recomendaciones-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReviewsListComponent,
    TipsListComponent,
    BusinessDetailComponent,
    RecomendacionesListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
