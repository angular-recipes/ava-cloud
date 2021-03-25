import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlertsPageComponent } from './components/alerts-page/alerts-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AlertsPageComponent,
    SettingsPageComponent,
    SubscriptionPageComponent,
    MySubscriptionsComponent,
    MarketplaceComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
