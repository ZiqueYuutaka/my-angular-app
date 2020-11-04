import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HumidDataService, Humidity } from '@services/data/humid-data.service';
import { Temperature } from '../services/data/temp-data.service';

//declare const myTest: any;
declare var Chart: any;
declare var colorStrings: any;
declare var colorValues: any;
declare var myRandomScalingFactor: any;

@Component({
  selector: 'app-hex-dash',
  templateUrl: './hex-dash.component.html',
  styleUrls: ['./hex-dash.component.css']
})
export class HexDashComponent implements OnInit {
  hexId;
  panels = []; //Holds the panel growth information
  humidities: Humidity[] = []
  humidTimes: string[] = []
  humidValues: number[] = []
  temperatures: Temperature[] = []
  temperatureTimes: string[] = []
  temperatureValues: number[] = []
  temperatureScale: string
  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  startYear = 2019;
  color = Chart.helpers.color;
  myBorderWidth = 2;
  minScaler = 0;
  maxScaler = 50;
  hexPanels = 2;
  humidityDataset = [];
  humidityGraphs = [];
  temperatureDataset = [];
  temperatureGraphs = [];
  askToAddCrop = false;//modifies planting button
  //panelName = '';
  humidError = false;
  tempError = false;


  //Create a dataset per each card

  constructor(
    private avRouter: ActivatedRoute,
    //private humidityData: HumidDataService,
    private datepipe: DatePipe
  ) {
    this.hexId = this.avRouter.snapshot.params['id'];

    //User HumidDataResolver via ActivatedRoute
    console.log('routing call to HumidDataResolver');
    //Name in data: {} must match the name provided in the AppRoutingModule
    this.avRouter.data.subscribe((data: { humidData: any }) => {
      this.humidities = data.humidData;
      console.log('humidities length after call: ' + this.humidities.length);
      this.convertHumidityResponse();
    });

    //User TempDataResolver via ActivatedRoute
    console.log('routing call to tempDataResolver');
    //Name in data: {} must match the name provided in the AppRoutingModule
    this.avRouter.data.subscribe((data: { tempData: any }) => {
      this.temperatures = data.tempData;
      console.log('temperatures length after call: ' + this.temperatures.length);
      this.convertTemperatureResponse();
    });
    
    ///////////////////////////// INITIAL TRY ///////////////////////////////////////////
    //this.loadDatasets(this.hexId);

    //this.loadPanelData(this.hexId);

    //this.panelName = this.loadPanelCropLabels(this.hexId);
    //console.log('===>>>panelName: ' + this.panelName);
    /////////////////////////////////////////////////////////////////////////////////////

  }

  ngOnInit() {
    console.log("adding data object to set");


    //for (var i = 0; i < this.romaineGrowthDatasets.length; i++) {
    //  this.romaineGraphs.push(
    //    {
    //      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], //TODO: I could rotate these months later
    //      datasets: [this.romaineGrowthDatasets[i]]
    //    }
    //  );
    //}
    console.log("===>>>: inside of onload()");
    //for each graph, find the panel it belongs to and draw it there
    //console.log("===>>>this.panels.length: "+ this.panels.length);

    ////////////////////////////////////FOLLOWING CODE USED FOR DEBUG. KEEP IT!/
    //this.humidityDataset.push(
    //  {
    //    label: 'Panel-Humidity',
    //    backgroundColor: colorStrings[0],
    //    fill: false,
    //    borderColor: colorValues[0],
    //    borderWidth: this.myBorderWidth,
    //    data: [1, 2, 3, 4, 5, 6, 7]
    //    //data: this.humidValues
    //  }
    //);

    //this.humidityGraphs.push(
    //  {
    //    //labels: this.humidTimes, //TODO: I could rotate these months later
    //    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    //    datasets: [this.humidityDataset[0]]
    //  }
    //);
    //////////////////////////////////////////////////////////////////////////////

    this.displayGraphOfData('humidity-display', 'line', this.humidityGraphs[0], 'Humidity Display');
    if (this.humidValues.slice(-1)[0] < 10) {
      this.humidError = true;
    }

    this.displayGraphOfData('temp-display', 'line', this.temperatureGraphs[0], 'Temperature Display');
    if (this.temperatureValues.slice(-1)[0] < 10) {
      this.tempError = true;
    }


  }//end ngOnInit

  //Call for panel data for the hexagrow
  //loadPanelData(hexId) {
  //  console.log("===>>>loadPanelData(" + hexId + ")");
  //  this.humidityData.getAllHumidity(hexId).subscribe(
  //    response => {
  //      this.convertHumidityResponse(response);
  //    }
  //  );

    
  //}//END LOADPANELDATA

  convertHumidityResponse() {
    console.log('===>>>: loaded humidity size: ' + this.humidities.length);
    for (let item of this.humidities) {
      this.humidValues.push(Number.parseFloat(item.percentage.toPrecision(4)));
      this.humidTimes.push(this.datepipe.transform(item.timestamp, 'yyyy-MMM-dd HH:mm:ss'));
    }
    console.log('===>>>: loaded humidity value size: ' + this.humidValues.length);
    console.log('===>>>: loaded humidity time size: ' + this.humidTimes.length);
    this.humidityDataset.push(
      {
        label: 'Humidity',
        backgroundColor: colorStrings[0],
        fill: false,
        borderColor: colorValues[0],
        borderWidth: this.myBorderWidth,
        data: this.humidValues
      }
    );

    this.humidityGraphs.push(
      {
        labels: this.humidTimes,
        datasets: [this.humidityDataset[0]]
      }
    );

  }

  convertTemperatureResponse() {
    console.log('===>>>: loaded temperatures size: ' + this.temperatures.length);
    this.temperatureScale = this.temperatures[0].temp_scale;
    for (let item of this.temperatures) {
      this.temperatureValues.push(Number.parseFloat(item.temp_val.toPrecision(4)));
      this.temperatureTimes.push(this.datepipe.transform(item.timestamp, 'yyyy-MMM-dd HH:mm:ss'));
    }
    console.log('===>>>: loaded temperature value size: ' + this.temperatureValues.length);
    console.log('===>>>: loaded temperature time size: ' + this.temperatureTimes.length);
    this.temperatureDataset.push(
      {
        label: 'Temperature',
        backgroundColor: colorStrings[0],
        fill: false,
        borderColor: colorValues[0],
        borderWidth: this.myBorderWidth,
        data: this.temperatureValues
      }
    );

    this.temperatureGraphs.push(
      {
        labels: this.temperatureTimes,
        datasets: [this.temperatureDataset[0]]
      }
    );

  }

  displayGraphOfData(elementId, graphType, dataGraphs, graphTitle) {
    var ctx1 = document.getElementById(elementId);
    var myBar = new Chart(ctx1, {
      type: graphType,
      data: dataGraphs,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: graphTitle
        },
        scales: {
          xAxes: [{
            barPercentage: 0.75,
            categoryPercentage: 0.5
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
        // End scales
      }
      // End options
    });// End chart constructor
  }

}
