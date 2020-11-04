import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { HexDashComponent } from './hex-dash/hex-dash.component';
//import { PanelDashComponent } from './panel-dash/panel-dash.component';
//import { OxygenDashComponent } from './nutrients/oxygen-dash/oxygen-dash.component';
//import { AmmoniaDashComponent } from './nutrients/ammonia-dash/ammonia-dash.component';
//import { NitrateDashComponent } from './nutrients/nitrate-dash/nitrate-dash.component';
//import { NitriteDashComponent } from './nutrients/nitrite-dash/nitrite-dash.component';
//import { CarbondioxDashComponent } from './nutrients/carbondiox-dash/carbondiox-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    HomeDashComponent,
    HexDashComponent
    //PanelDashComponent,
    //OxygenDashComponent,
    //AmmoniaDashComponent,
    //NitrateDashComponent,
    //NitriteDashComponent,
    //CarbondioxDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
