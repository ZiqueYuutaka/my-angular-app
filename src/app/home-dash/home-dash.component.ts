import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';//'@angular/common/http';
import { BACKEND_URL, HTTP_OPTIONS } from '@base/app.constants';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {
  title = 'Main Dashboard';
  hexagrows: Hexagrow[];
  constructor(
    private httpClient: HttpClient
  ) {
    console.log("===>>>: Inside of HomeDashComponent Constructor....");
    //Call to get total number of hexagrows
    //this.getHexagrows();
    console.log("getting hexagrows...")
    console.log(this.getHexagrows());
  }

  ngOnInit() {
    console.log("===>>: Inside of HomeDashComp ngOnInit....");
  }

  //Will be an API call to DB
  getHexagrows() {
    return this.httpClient.get<Hexagrow>(`${BACKEND_URL}/api/hexagrows`, { headers: HTTP_OPTIONS.headers}).subscribe(
      response => this.convertResponse(response)
    );
    //this.hexagrows = [
    //  {
    //    id: 100,
    //    panels: ['Romaine', 'Romaine', 'Romaine', 'Romaine', 'Romaine', 'Romaine']
    //  },
    //  {
    //    id: 324,
    //    panels: ['Vanilla', 'Vanilla', 'Vanilla', 'Vanilla', 'Vanilla', 'Vanilla']
    //  }
    //];
  }

  convertResponse(response) {
    console.log(response);
    this.hexagrows = response;
  }

}

export class Hexagrow {
  constructor(
    id: number,
    uuid: string
  ) { }
}
