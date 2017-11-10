import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { appRoutes } from './app.route';
import { AppService} from './app.service';
import { DbconnectService} from './dbconnect.service';
import { HttpModule } from '@angular/http';
import { ProductcartComponent } from './productcart/productcart.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("557499716168-19lnmcki5a7ejpppkm72ilf52rs6eoaj.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("293184114528709")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ProfileComponent,
    NavigationComponent,
    ProductcartComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    HttpModule,  
    FormsModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [AppService,DbconnectService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

