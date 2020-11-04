import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BACKEND_URL } from '@base/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTemperature(hexId) {
    return this.httpClient.get<Temperature>(`${BACKEND_URL}/api/temperatures/${hexId}`);
  }

  getRecentTenTemperature(hexId) {
    let params = new HttpParams();
    params = params.append('size', '10');
    params = params.append('recent', 'true');
    return this.httpClient.get<Temperature>(`${BACKEND_URL}/api/temperatures/${hexId}`, {params: params});
  }
}


export class Temperature {
  id: number;
  hexagrow_id_fkey: number;
  temp_val: Number;
  temp_scale: string;
  timestamp: Date;
  constructor(
    id: number,
    hexagrow_id_fkey: number,
    temp_val: Number,
    temp_scale: string,
    timestamp: Date
  ) { }
}
