import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BACKEND_URL } from '@base/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HumidDataService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllHumidity(hexId) {
    return this.httpClient.get<Humidity>(`${BACKEND_URL}/api/humidities/${hexId}`);
  }

  getRecentTenHumidity(hexId) {
    let params = new HttpParams();
    params = params.append('size', '10');
    params = params.append('recent', 'true');
    return this.httpClient.get<Humidity>(`${BACKEND_URL}/api/humidities/${hexId}`, { params: params });
  }
}


export class Humidity {
  id: number;
  hexagrow_id_fkey: number;
  percentage: Number;
  timestamp: string;
  constructor(
    id: number,
    hexagrow_id_fkey: number,
    percentage: Number,
    timestamp: string
  ) {
    this.id = id;
    this.hexagrow_id_fkey = hexagrow_id_fkey;
    this.percentage = percentage;
    this.timestamp = timestamp;
  }
}
