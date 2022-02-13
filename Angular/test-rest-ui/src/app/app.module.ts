import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UseridComponent } from './user/userid/userid.component';
import { UsersaveComponent } from './user/usersave/usersave.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { ROUTES } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from './user/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UseridComponent,
    UsersaveComponent,
    UserupdateComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
