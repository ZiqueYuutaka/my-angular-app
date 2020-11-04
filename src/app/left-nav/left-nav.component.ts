import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  demoHexagrows = 2;
  hexagrowNavObjs = [];
  hexagrowLinksParams = [];
  hexagrowIds = [];
  panelIds = [];

  constructor() {
    console.log('===>>>inside LeftNavComponent constructor...');
    this.loadHexagrowIds();
    console.log('===>hexagrowIds ' + this.hexagrowIds);
    console.log('===>>>hexagrowId length ' + this.hexagrowIds.length);
    console.log('===>>>loading panel ids for each hexagrow...');
    this.loadHexagrowNavObj();
  }

  ngOnInit() {
  }

  loadHexagrowIds() {
    this.hexagrowIds.push(100);
    this.hexagrowIds.push(324);
  }

  loadHexagrowNavObj() {
    for (var i = 0; i < this.hexagrowIds.length; i++) {
      console.log('===>>>loading panel info for hexagrow ' + this.hexagrowIds[i]);
      this.hexagrowNavObjs.push({
        hexId: this.hexagrowIds[i],
        panels: [0, 1, 2, 3, 4, 5],
        datatarget: '#'+[i],
        acontrols:'submenu-'+[i]
      });
    }
  }

  loadHexagrowLinks() {
    var params = [];

  }

}
