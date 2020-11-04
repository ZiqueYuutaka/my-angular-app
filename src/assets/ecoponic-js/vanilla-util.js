////////////////////////////////////////////////////////////////////////////////////////////////
//			VANILLA DASHBOARD DEMO SCRIPTS
//				USED TO SIMULATE A DISASTER WITH OXYGEN LEVELS
////////////////////////////////////////////////////////////////////////////////////////////////
var MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];
var CHEMICALS = ['Ammonia (NH3)', 'Nitrate (NO3-)', 'Nitrite (NO2-)', 
                 'Dissolved Oxygen (O2)', 'Carbon Dioxide (CO2)' ];
var DAYS_OF_WEEK = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
var HOURS_24 = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00',
                '12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
var color = Chart.helpers.color;
var minScaler = 0;
var maxScaler = 100;
var myBorderWidth = 2;
var chemGraphNamePrefix = 'line-graph-'; //used to locate each graph on the vanilla dashboard page


//var colorStrings = [color(window.chartColors.green).alpha(0.5)
//					.rgbString(),
//					color(window.chartColors.blue).alpha(0.5)
//					.rgbString(),
//					color(window.chartColors.red).alpha(0.5)
//					.rgbString(),
//					color(window.chartColors.yellow).alpha(0.5)
//					.rgbString(),
//					color(window.chartColors.purple).alpha(0.5)
//					.rgbString()
//				];
//var colorValues = [window.chartColors.green,
//					window.chartColors.blue,
//					window.chartColors.red,
//					window.chartColors.yellow,
//					window.chartColors.purple
//				];

//////////////////	Demo data that will be retrieved from external source
//ORIGINAL
//var barChartData = {
//	labels : MONTHS,
//	datasets : [
//			{
//				label : 'Output',
//				backgroundColor : color(window.chartColors.blue).alpha(0.5)
//						.rgbString(),
//				borderColor : window.chartColors.blue,
//				borderWidth : myBorderWidth,
//				data : [ myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler),
//						myRandomScalingFactor(minScaler, maxScaler) 
//						]
//			} ]
//
//};
//create historical data of the panel
var yearsOfData = 2;
var historicalDataset = [];
for(var i = 0; i < yearsOfData; i++){
	historicalDataset.push({
		label : 'Year-' + (i+1),
		backgroundColor : colorStrings[i],
		borderColor : colorValues[i],
		borderWidth : myBorderWidth,
		data : [ myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
		        myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler),
				myRandomScalingFactor(minScaler, maxScaler) 
				]
	});
}

//add current year
historicalDataset.push(
		{
			label : 'Current Year',
			backgroundColor : colorStrings[yearsOfData+1],
			borderColor : colorValues[yearsOfData+1],
			borderWidth : myBorderWidth,
			data : [ myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler),
					myRandomScalingFactor(minScaler, maxScaler) 
					]
		});
var barChartData = {
	labels : MONTHS,
	datasets : historicalDataset

};

//var growthChartData = {
//		labels : MONTHS,
//		datasets : [
//				{
//					label : 'Diameter (cm)',
//					backgroundColor : color(window.chartColors.green).alpha(0.5)
//							.rgbString(),
//					borderColor : window.chartColors.green,
//					borderWidth : 1,
//					data : [ 0, 10, 20, 30, 50, 80, 130]
//				} ]
//
//};
var vanillaHexagrowUnits = 1;
var vanillaGrowthDataset = [];

for (var i = 0; i < vanillaHexagrowUnits; i++) {
	vanillaGrowthDataset.push(
			{
		label : 'Panel-' + (i+1) + ' Crop Size',
		backgroundColor: colorStrings[i],
		fill : false,
		borderColor : colorValues[i],
		borderWidth : myBorderWidth,
		data : [ myRandomScalingFactor(1, 2),
				myRandomScalingFactor(3, 5),
				myRandomScalingFactor(5, 8),
				myRandomScalingFactor(8, 13),
				myRandomScalingFactor(13, 21),
				myRandomScalingFactor(21, 34),
				myRandomScalingFactor(34, 55) ]
			}
		);
}

var vanillaGrowthGraph = {
		labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
		datasets: vanillaGrowthDataset
		
};

//SET UP CURRENT CHEMICAL READ OUT PER CHEMICAL
var minChemScaler = 20;
var maxChemScaler = 50;
//get chemical readouts from external source
var dailyChemLevelData = [ myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						0,
						myRandomScalingFactor(minChemScaler, maxChemScaler)];
var chemData = {
		labels : CHEMICALS,
		datasets : [{
			label : "Daily Chemical Values",
			backgroundColor : colorStrings,
			borderColor : colorValues,
			borderWidth : myBorderWidth,
			data : dailyChemLevelData
		}]

};

//SET UP LINE CHART FOR EACH CHEMICALS AVERAGE DAILY VALUE
//Line charts for each chemical
var chemicalLineCharts = [];
var myData = [];
for (var i = 0; i < CHEMICALS.length; i++){
	
	if(CHEMICALS[i] == 'Dissolved Oxygen (O2)'){
		myData=[ myRandomScalingFactor(minChemScaler, maxChemScaler),
					myRandomScalingFactor(minChemScaler, maxChemScaler),
					myRandomScalingFactor(minChemScaler, maxChemScaler),
					10,
					0//,
					//myRandomScalingFactor(minScaler, maxScaler),
					//myRandomScalingFactor(minScaler, maxScaler) 
					]
		var minOxygen = 70;
		var maxOxygen = 90;
		chemicalLineCharts.push(
				{
					labels : HOURS_24,
					datasets : [
							{
								label : 'Hourly Levels',
								backgroundColor : colorStrings[i],
								borderColor : colorValues[i],
								borderWidth : myBorderWidth,
								data : [ myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										47,
										22,
										10,
										0 
										]
							} ]
			
				}
		);
	}else{
		myData = [ myRandomScalingFactor(minChemScaler, maxChemScaler),
			myRandomScalingFactor(minChemScaler, maxChemScaler),
			myRandomScalingFactor(minChemScaler, maxChemScaler),
			myRandomScalingFactor(minChemScaler, maxChemScaler),
			myRandomScalingFactor(minChemScaler, maxChemScaler)//,
			//myRandomScalingFactor(minScaler, maxScaler),
			//myRandomScalingFactor(minScaler, maxScaler) 
			]

		chemicalLineCharts.push(
				{
					labels : DAYS_OF_WEEK,
					datasets : [
							{
								label : 'Current Week',
								backgroundColor : colorStrings[i],
								borderColor : colorValues[i],
								borderWidth : myBorderWidth,
								data : myData
							} ]
			
				}
		);
	}
}

//var lineChartData = {
//		labels : DAYS_OF_WEEK,
//		datasets : [
//				{
//					label : 'Current Week',
//					backgroundColor : color(window.chartColors.blue).alpha(0.5)
//							.rgbString(),
//					borderColor : window.chartColors.blue,
//					borderWidth : 1,
//					data : [ myRandomScalingFactor(minScaler, maxScaler),
//							myRandomScalingFactor(minScaler, maxScaler),
//							myRandomScalingFactor(minScaler, maxScaler),
//							myRandomScalingFactor(minScaler, maxScaler),
//							myRandomScalingFactor(minScaler, maxScaler)//,
//							//myRandomScalingFactor(minScaler, maxScaler),
//							//myRandomScalingFactor(minScaler, maxScaler) 
//							]
//				} ]
//
//	};
//////////////////	END DEMO DATA

// load two bar charts
window.onload = function() {
	//Hide all alerts first
	var chemAlert = document.getElementById('chem-alert');
	chemAlert.style.visibility="hidden";
	//Set daily chemical warnings to style hidden
	//for(var i = 0; i<dailyChemLevelData.length; i++){
	//	document.getElementById(chemGraphNamePrefix + i +"-alert").style.visibility="hidden";
	//	
	//}
	
	var ctx1 = document.getElementById('vanillaCanvasBar').getContext('2d');
	window.myBar = new Chart(ctx1, {
		type : 'bar',
		data : barChartData,
		options : {
			responsive : true,
			legend : {
				position : 'top',
			},
			title : {
				display : true,
				text : 'Vanilla'
			},
			scales : {
				xAxes : [ {
					barPercentage : 0.75,
					categoryPercentage : 0.5
				} ],
				yAxes : [ {
					ticks : {
						beginAtZero : false
					}
				} ]
			}
		// End scales
		}
	// End options
	});// End chart constructor
	
	var ctx1 = document.getElementById('growthLine').getContext('2d');
	window.myBar = new Chart(ctx1, {
		type : 'line',
		data : vanillaGrowthGraph,
		options : {
			responsive : true,
			legend : {
				position : 'top',
			},
			title : {
				display : true,
				text : 'Crop Size'
			},
			scales : {
				xAxes : [ {
					barPercentage : 0.75,
					categoryPercentage : 0.5
				} ],
				yAxes : [ {
					ticks : {
						beginAtZero : false
					}
				} ]
			}
		// End scales
		}
	// End options
	});// End chart constructor
	
	var ctx1 = document.getElementById('dailyChemLevels').getContext('2d');
	window.myBar = new Chart(ctx1, {
		type : 'bar',
		data : chemData,
		options : {
			responsive : true,
			legend : {
				display : false
			},
			title : {
				display : true,
				text : 'Current chemical levels'
			},
			scales : {
				xAxes : [ {
					barPercentage : 0.75,
					categoryPercentage : 0.5
				} ],
				yAxes : [ {
					ticks : {
						beginAtZero : true
					}
				} ]
			}
		// End scales
		}
	// End options
	});// End chart constructor
	
	for(var i = 0; i < chemicalLineCharts.length; i++){
		var ctx1 = document.getElementById(chemGraphNamePrefix + i).getContext('2d');
		window.myBar = new Chart(ctx1, {
			type : 'line',
			data : chemicalLineCharts[i],
			options : {
				responsive : true,
				legend : {
					position : 'top',
				},
				title : {
					display : true,
					text : CHEMICALS[i]
				},
				scales : {
					xAxes : [ {
						barPercentage : 0.75,
						categoryPercentage : 0.5
					} ],
					yAxes : [ {
						ticks : {
							beginAtZero : true
						}
					} ]
				}
			// End scales
			}
		// End options
		});// End chart constructor
		document.getElementById('title-'+i).innerHTML=CHEMICALS[i];
	}
	
	//Go through all the current chemical levels to see if any of them are off
	//	demoing oxygen levels
	for(var i = 0; i<dailyChemLevelData.length; i++){
		if(dailyChemLevelData[i] == 0){
			console.log(CHEMICALS[i] + " has level 0....")
			//Write an alert on the daily chem level graph
			chemAlert.style.visibility="visible";
			var divElem = document.createElement("div");
			divElem.innerHTML = "CHECK <a href=\"#"+chemGraphNamePrefix + i+"\" class=\"alert-link\">"+CHEMICALS[i].toUpperCase()+"</a> INPUTS<br>";
			chemAlert.appendChild(divElem);
			
			//Write an alert on the graph associated with the alert
			var canvasElem = document.getElementById(chemGraphNamePrefix + i);
			var alertElem = document.createElement("div");
			alertElem.setAttribute("id", chemGraphNamePrefix + i );
			alertElem.setAttribute("class","alert alert-danger");
			alertElem.setAttribute("role", "alert");
			alertElem.innerHTML = "CLICK \"A DEEPER LOOK\" FOR INPUT LEVELS<br>";
			canvasElem.insertAdjacentElement('afterend', alertElem);
			
		}
	}
	
	

};// End onload function
////////////////////////////////////////////////////////////////////////////////////////////////
//	END ROMAINE DASHBOARD SCRIPTS
////////////////////////////////////////////////////////////////////////////////////////////////
