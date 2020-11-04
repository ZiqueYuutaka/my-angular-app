////////////////////////////////////////////////////////////////////////////////////////////////
//			VANILLA DASHBOARD DEMO SCRIPTS
//				USED TO SIMULATE A DISASTER WITH OXYGEN LEVELS
////////////////////////////////////////////////////////////////////////////////////////////////
var MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];
var O2_FEEDERS = ['Feeder-1', 'Feeder-2', 'Feeder-3', 'Feeder-4', 'Feeder-5' ];
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
var barChartData = {
	labels : MONTHS,
	datasets : [
			{
				label : 'Output',
				backgroundColor : color(window.chartColors.blue).alpha(0.5)
						.rgbString(),
				borderColor : window.chartColors.blue,
				borderWidth : myBorderWidth,
				data : [ myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler),
						myRandomScalingFactor(minScaler, maxScaler) 
						]
			} ]

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
var feederDataset = [];

var minOxygen = 75;
var maxOxygen = 80;
for (var i = 0; i < O2_FEEDERS.length; i++) {
	feederDataset.push(
			{
		label : O2_FEEDERS[i],
		backgroundColor: colorStrings[i],
		fill : false,
		borderColor : colorValues[i],
		borderWidth : myBorderWidth,
		data : [ myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					myRandomScalingFactor(minOxygen, maxOxygen),
					22,
					0,
					0
				 ]
			}
		);
}

var feederData = {
		labels: HOURS_24,
		datasets: feederDataset
		
};

//SET UP CURRENT CHEMICAL READ OUT PER CHEMICAL
var minChemScaler = 0;
var maxChemScaler = 2;
//get chemical readouts from external source
var currentPsiLevels = [ myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler),
						myRandomScalingFactor(minChemScaler, maxChemScaler)];
var chemData = {
		labels : O2_FEEDERS,
		datasets : [{
			label : "Daily Chemical Values",
			backgroundColor : colorStrings,
			borderColor : colorValues,
			fill : false,
			borderWidth : myBorderWidth,
			data : currentPsiLevels
		}]

};

//////////////////	END DEMO DATA

// load two bar charts
window.onload = function() {
	//Hide all alerts first
	//var chemAlert = document.getElementById('chem-alert');
	//chemAlert.style.visibility="hidden";
	//Set daily chemical warnings to style hidden
	//for(var i = 0; i<dailyChemLevelData.length; i++){
	//	document.getElementById(chemGraphNamePrefix + i +"-alert").style.visibility="hidden";
	//	
	//}
	
	var ctx1 = document.getElementById('oxygenPSI').getContext('2d');
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
				text : 'Current PSI levels'
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
	
	var ctx1 = document.getElementById('oxygenWeeklyLevels').getContext('2d');
	window.myBar = new Chart(ctx1, {
		type : 'line',
		data : feederData,
		options : {
			responsive : true,
			legend : {
				display : true
			},
			title : {
				display : true,
				text : 'Hourly PSI levels'
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
	

};// End onload function
////////////////////////////////////////////////////////////////////////////////////////////////
//	END ROMAINE DASHBOARD SCRIPTS
////////////////////////////////////////////////////////////////////////////////////////////////
