////////////////////////////////////////////////////////////////////////////////////////////////
//			ROMAINE DASHBOARD DEMO SCRIPTS
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
var romaineHexagrowUnits = 1;
var romaineGrowthDataset = [];

for (var i = 0; i < romaineHexagrowUnits; i++) {
	romaineGrowthDataset.push(
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

var romaineGrowthGraph = {
		labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
		datasets: romaineGrowthDataset
		
};

//SET UP CURRENT CHEMICAL READ OUT PER CHEMICAL
var minChemScaler = 20;
var maxChemScaler = 50;
var chemData = {
		labels : CHEMICALS,
		datasets : [{
			label : "Daily Chemical Values",
			backgroundColor : colorStrings,
			borderColor : colorValues,
			borderWidth : myBorderWidth,
			data : [ myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler)]
		}]

};

//SET UP LINE CHART FOR EACH CHEMICALS AVERAGE DAILY VALUE
//Line charts for each chemical
var chemicalLineCharts = [];

//ORIGINAL
//for (var i = 0; i < CHEMICALS.length; i++){
//	chemicalLineCharts.push(
//			{
//				labels : DAYS_OF_WEEK,
//				datasets : [
//						{
//							label : 'Current Week',
//							backgroundColor : colorStrings[i],
//							borderColor : colorValues[i],
//							borderWidth : myBorderWidth,
//							data : [ myRandomScalingFactor(minChemScaler, maxChemScaler),
//									myRandomScalingFactor(minChemScaler, maxChemScaler),
//									myRandomScalingFactor(minChemScaler, maxChemScaler),
//									myRandomScalingFactor(minChemScaler, maxChemScaler),
//									myRandomScalingFactor(minChemScaler, maxChemScaler)//,
//									//myRandomScalingFactor(minScaler, maxScaler),
//									//myRandomScalingFactor(minScaler, maxScaler) 
//									]
//						} ]
//		
//			}
//	);
//}
for (var i = 0; i < CHEMICALS.length; i++){
	if(CHEMICALS[i] !== 'Dissolved Oxygen (O2)'){
		chemicalLineCharts.push(
				{
					labels : DAYS_OF_WEEK,
					datasets : [
							{
								label : 'Current Week',
								backgroundColor : colorStrings[i],
								borderColor : colorValues[i],
								borderWidth : myBorderWidth,
								data : [ myRandomScalingFactor(minChemScaler, maxChemScaler),
										myRandomScalingFactor(minChemScaler, maxChemScaler),
										myRandomScalingFactor(minChemScaler, maxChemScaler),
										myRandomScalingFactor(minChemScaler, maxChemScaler),
										myRandomScalingFactor(minChemScaler, maxChemScaler)//,
										//myRandomScalingFactor(minScaler, maxScaler),
										//myRandomScalingFactor(minScaler, maxScaler) 
										]
							} ]
			
				}
		);
	}else{ //create dissolved oxygen levels
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
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen),
										myRandomScalingFactor(minOxygen, maxOxygen) 
										]
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
	var ctx1 = document.getElementById('romaineCanvasBar').getContext('2d');
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
				text : 'Romaine'
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
		data : romaineGrowthGraph,
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
		var ctx1 = document.getElementById('line-graph-' + i).getContext('2d');
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
	

};// End onload function
////////////////////////////////////////////////////////////////////////////////////////////////
//	END ROMAINE DASHBOARD SCRIPTS
////////////////////////////////////////////////////////////////////////////////////////////////
