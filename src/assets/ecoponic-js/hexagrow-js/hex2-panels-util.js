////////////////////////////////////////////////////////////////////////////////////////////////
//			HOME DASHBOARD SCRIPTS
////////////////////////////////////////////////////////////////////////////////////////////////
var MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];
var startYear = 2019;
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
var hexPanels = 6;
var vanillaGrowthDatasets = [];

//Create a dataset per each card
console.log("adding data object to set");
for(var i = 0; i < hexPanels; i++) {
	vanillaGrowthDatasets.push(
			{
		label : 'Panel-' + (i+1) ,
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

//create a graph per dataset
var vanillaGraphs = [];
//vanillaGraph = {
//		labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
//		datasets: vanillaGrowthDatasets
//		};

for(var i = 0; i < vanillaGrowthDatasets.length; i++){
	vanillaGraphs.push(
			{
		labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ], //TODO: I could rotate these months later
		datasets: [ vanillaGrowthDatasets[i] ]
			}
	);
}

// ////////////////////////////////// END LEAFY GREEN DEMO
// /////////////////////////////////////////

// /////////////////////////////// ON WINDOW LOAD
// /////////////////////////////////////////////////////
// load two bar charts
window.onload = function() {
	
	//for each graph, find the panel it belongs to and draw it there
	for(var i = 0; i < vanillaGraphs.length; i++){
		var ctx1 = document.getElementById('panel-' + i).getContext('2d');
		window.myBar = new Chart(ctx1, {
			type : 'line',
			data : vanillaGraphs[i],
			options : {
				responsive : true,
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
	}
	

	

};// End onload function
// //////////////////////////////////////////////////////////////////////////////////////////////
// END HOME DASHBOARD SCRIPTS
// //////////////////////////////////////////////////////////////////////////////////////////////
