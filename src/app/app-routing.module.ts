import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDashComponent} from './home-dash/home-dash.component';
import { HexDashComponent } from './hex-dash/hex-dash.component';
import { HumidDataResolver } from '@services/resolvers/humid-data-resolver';
import { TempDataResolver } from '@services/resolvers/temp-data-resolver';
//import { PanelDashComponent } from './panel-dash/panel-dash.component';
//import { OxygenDashComponent } from './nutrients/oxygen-dash/oxygen-dash.component';
//import { AmmoniaDashComponent } from './nutrients/ammonia-dash/ammonia-dash.component';
//import { NitrateDashComponent } from './nutrients/nitrate-dash/nitrate-dash.component';
//import { NitriteDashComponent } from './nutrients/nitrite-dash/nitrite-dash.component';
//import { CarbondioxDashComponent } from './nutrients/carbondiox-dash/carbondiox-dash.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashComponent
  },
  {
    path: 'hexagrow',
    component: HomeDashComponent
  },
   //Name in resolve: {} must match the property called in the ActivatedRoute's data call
  {
    path: 'hexagrow/:id',
    component: HexDashComponent,
    resolve: {
      humidData: HumidDataResolver,
      tempData: TempDataResolver
    }
  }
  //{ path: 'hexagrow/:hexId/panel/:panelId', component: PanelDashComponent },
  //{ path: 'hexagrow/:hexId/panel/:panelId/oxygen/:oxygenId', component: OxygenDashComponent },
  //{ path: 'hexagrow/:hexId/panel/:panelId/ammonia/:ammoniaId', component: AmmoniaDashComponent },
  //{ path: 'hexagrow/:hexId/panel/:panelId/nitrate/:nitrateId', component: NitrateDashComponent },
  //{ path: 'hexagrow/:hexId/panel/:panelId/nitrite/:nitriteId', component: NitriteDashComponent },
  //{ path: 'hexagrow/:hexId/panel/:panelId/carbondioxide/:co2Id', component: CarbondioxDashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
