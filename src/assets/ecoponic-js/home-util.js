////////////////////////////////////////////////////////////////////////////////////////////////
//			HOME DASHBOARD SCRIPTS
////////////////////////////////////////////////////////////////////////////////////////////////
var MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];
var color = Chart.helpers.color;
var myBorderWidth = 2;
var minScaler = 0;
var maxScaler = 50;

// Demo data that will be retrieved from external source
// ////////////////////////////////// LEAFY GREEN DEMO
// /////////////////////////////////////////
// var leafyGreenData = {
// labels : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
// datasets : [
// {
// label : 'Cabbage',
// backgroundColor : color(window.chartColors.green).alpha(0.5)
// .rgbString(),
// borderColor : window.chartColors.green,
// borderWidth : 1,
// // data : [ randomScalingFactor(), randomScalingFactor(),
// // randomScalingFactor(), randomScalingFactor(),
// // randomScalingFactor(), randomScalingFactor(),
// // randomScalingFactor() ]
// data : [ myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler) ]
// },
// {
// label : 'Romaine',
// backgroundColor : color(window.chartColors.blue).alpha(0.5)
// .rgbString(),
// borderColor : window.chartColors.blue,
// borderWidth : 1,
// data : [ myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler),
// myRandomScalingFactor(minScaler, maxScaler) ]
// } ]
//
// };
var romaineHexagrowUnits = 4;
var romaineGrowthDataset = [];

for (var i = 0; i < romaineHexagrowUnits; i++) {
	romaineGrowthDataset.push(
			{
		label : 'Romaine' + i ,
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

// ////////////////////////////////// END LEAFY GREEN DEMO
// /////////////////////////////////////////

// Demo data that will be retrieved from external source
// ////////////////////////////////// SPECIALTY CROP DEMO
// /////////////////////////////////////////
var specialtyGraph = {
	labels : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets : [ {
		label : 'Vanilla',
		backgroundColor : color(window.chartColors.green).alpha(0.5)
				.rgbString(),
		fill : false,
		borderColor : window.chartColors.green,
		borderWidth : myBorderWidth,
		data : [ myRandomScalingFactor(1, 2),
					myRandomScalingFactor(3, 5),
					myRandomScalingFactor(5, 8),
					myRandomScalingFactor(8, 13),
					myRandomScalingFactor(13, 21),
					myRandomScalingFactor(21, 34),
					myRandomScalingFactor(34, 55) ]
	} ]

};
// ///////////////////////////////// END SPECIALTY CROP DEMO
// /////////////////////////////////////////

// /////////////////////////////// ON WINDOW LOAD
// /////////////////////////////////////////////////////
// load two bar charts
window.onload = function() {
	var ctx1 = document.getElementById('myDemoCanvas').getContext('2d');
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
				text : 'Average Romaine Size'
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

	var ctx2 = document.getElementById('specialtyDemoCanvas').getContext('2d');
	window.myBar = new Chart(ctx2, {
		type : 'line',
		data : specialtyGraph,
		options : {
			responsive : false,
			legend : {
				position : 'top',
			},
			title : {
				display : true,
				text : 'Average Vanilla Size'
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

};// End onload function
// //////////////////////////////////////////////////////////////////////////////////////////////
// END HOME DASHBOARD SCRIPTS
// //////////////////////////////////////////////////////////////////////////////////////////////
