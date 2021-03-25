import { RulesComponent } from './components/rules/rules.component'
import { MarketplaceComponent } from './components/marketplace/marketplace.component'
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component'
import { AlertsPageComponent } from './components/alerts-page/alerts-page.component'
import { SettingsPageComponent } from './components/settings-page/settings-page.component'
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: 'alerts', component: AlertsPageComponent },
      { path: 'settings', component: SettingsPageComponent },
      {
        path: 'subscriptions',
        component: SubscriptionPageComponent,
        children: [
          { path: 'my-subscriptions', component: MySubscriptionsComponent },
          { path: 'marketplace', component: MarketplaceComponent },
          { path: 'rules', component: RulesComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
