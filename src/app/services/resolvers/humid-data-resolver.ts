import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HumidDataService, Humidity } from '@services/data/humid-data.service';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HumidDataResolver implements Resolve<Humidity> {
  constructor(
    private humidDataService: HumidDataService
  ) { }

  resolve(avRouter: ActivatedRouteSnapshot) {
    console.log('Calling resolve in HumidDataResolver');
    var size = avRouter.queryParams['size'];
    if(size <= 0){
      return this.humidDataService.getAllHumidity(avRouter.params['id']).pipe();
    }else{
      return this.humidDataService.getRecentTenHumidity(avRouter.params['id']).pipe();
    }
  }
}
