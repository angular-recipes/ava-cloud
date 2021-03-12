import { AlertsPageComponent } from './components/alerts-page/alerts-page.component'
import { SettingsPageComponent } from './components/settings-page/settings-page.component'
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home/alerts', component: AlertsPageComponent },
  { path: 'home/settings', component: SettingsPageComponent },
  { path: 'home/subscription', component: SubscriptionPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
