import { AccountInfoComponent } from './components/account-info/account-info.component'
import { PasswordComponent } from './components/password/password.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'alerts', component: AlertsPageComponent },
      {
        path: 'settings',
        component: SettingsPageComponent,
        children: [
          { path: 'password', component: PasswordComponent },
          { path: 'account', component: AccountInfoComponent },
          { path: '', redirectTo: '/home/settings/password', pathMatch: 'full' }
        ]
      },
      {
        path: 'subscriptions',
        component: SubscriptionPageComponent,
        children: [
          { path: 'my-subscriptions', component: MySubscriptionsComponent },
          { path: 'marketplace', component: MarketplaceComponent },
          { path: 'rules', component: RulesComponent },
          { path: '', redirectTo: '/home/subscriptions/my-subscriptions', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
