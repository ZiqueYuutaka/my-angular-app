import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TempDataService, Temperature } from '@services/data/temp-data.service';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TempDataResolver implements Resolve<Temperature> {

  constructor(
    private tempDataService: TempDataService
  ) { }

  resolve(avRouter: ActivatedRouteSnapshot) {
    console.log('Calling resolve in TempDataResolver');
    var size = avRouter.queryParams['size'];
    if(size <= 0){
      return this.tempDataService.getAllTemperature(avRouter.params['id']).pipe();
    }else{
      return this.tempDataService.getRecentTenTemperature(avRouter.params['id']).pipe();
    }
  }
}
