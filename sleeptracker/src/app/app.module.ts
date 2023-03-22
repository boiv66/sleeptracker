import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabBarComponent } from './components/TabBar/tab-bar.component';
import { SleepinessComponent } from './sleepiness/sleepiness.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePage } from './profile/profile.page';


@NgModule({
  declarations: [AppComponent, TabBarComponent, SleepinessComponent, ProfilePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, FontAwesomeModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
