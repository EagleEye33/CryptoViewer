//load current chart package
google.charts.load("45", {
  packages: ["corechart", "line"]
});
// set callback function when api loaded
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);

function drawChart() {
  // create data object with default value
  let data = google.visualization.arrayToDataTable([
    ["Months", "1 Bitcoin in USD"],
    [0, 0]
  ]);

  // create options object with titles, colors, etc.
  let options = {
    title: "Bitcoin",
    height: 500,
    width: 1000,
    colors: ['#FFFF00'],
    backgroundColor: 'none',

    hAxis: {
      title: "Time(seconds)",
      textStyle: {
      	color: '#ffffff'
      },
      	titleTextStyle: {
	    color: '#ffffff'
	}
    },

    vAxis: {
      title: "USD",
      textStyle: {
      	color: '#ffffff'
      },
      	titleTextStyle: {
	    color: '#ffffff'
	}
    },

    legend: {
	    textStyle: {
	    color: '#ffffff'
	  }
	},

	titleTextStyle: {
	    color: '#ffffff'
	}
  };
  // draw chart on load
  let chart = new google.visualization.LineChart(
    document.getElementById("BTCchart_div")
  );
  chart.draw(data, options);

  // interval for adding new data every 5000ms
    let index = 0;
    setInterval(function() {

    			$.ajax({

				dataType: 'json', // type of response data
		    	url : 'https://blockchain.info/ticker',
		    	type : 'GET',
		    	success : function(response) {
			    	value = parseInt(response.USD.last, 10)
			    	data.addRow([index, value]);
    				chart.draw(data, options);
    				index+=5;
		    	},
		    })
    		}, 5000);
}

function drawChart2() {
  // create data object with default value
  let data2 = google.visualization.arrayToDataTable([
    ["Months", "1 Ethereum in USD"],
    [0, 0]
  ]);

  // create options object with titles, colors, etc.
  let options2 = {
    title: "Ethereum",
    height: 500,
    width: 1000,
    backgroundColor: 'none',
	hAxis: {
	      title: "Time(seconds)",
	      textStyle: {
	      	color: '#ffffff'
	      },
	      	titleTextStyle: {
		    color: '#ffffff'
		}
	    },

	    vAxis: {
	      title: "USD",
	      textStyle: {
	      	color: '#ffffff'
	      },
	      	titleTextStyle: {
		    color: '#ffffff'
		}
	    },

	    legend: {
		    textStyle: {
		    color: '#ffffff'
		  }
		},

		titleTextStyle: {
		    color: '#ffffff'
		}
  };
  // draw chart on load
  let chart2 = new google.visualization.LineChart(
    document.getElementById("ETHchart_div")
  );
  chart2.draw(data2, options2);

  // interval for adding new data every 5000ms
    let index = 0;
        setInterval(function() {

    			$.ajax({

				dataType: 'json', // type of response data
		    	url : "https://api.coinbase.com/v2/prices/ETH-USD/spot",
		    	type : 'GET',
		    	success : function(response) {
			    	value = parseInt(response.data.amount, 10)
			    	data2.addRow([index, value]);
    				chart2.draw(data2, options2);
    				index+=5;
		    	},
		    })
    		}, 5000);

}

function drawChart3() {
  // create data object with default value
  let data3 = google.visualization.arrayToDataTable([
    ["Months", "1 Litecoin in USD"],
    [0, 0]
  ]);

  // create options object with titles, colors, etc.
  let options3 = {
    title: "Litecoin",
    height: 500,
    width: 1000,
    backgroundColor: 'none',
    colors: ['7FFFD4'],
	hAxis: {
	      title: "Time(seconds)",
	      textStyle: {
	      	color: '#ffffff'
	      },
	      	titleTextStyle: {
		    color: '#ffffff'
		}
	    },

	    vAxis: {
	      title: "USD",
	      textStyle: {
	      	color: '#ffffff'
	      },
	      	titleTextStyle: {
		    color: '#ffffff'
		}
	    },

	    legend: {
		    textStyle: {
		    color: '#ffffff'
		  }
		},

		titleTextStyle: {
		    color: '#ffffff'
		}
  };
  // draw chart on load
  let chart3 = new google.visualization.LineChart(
    document.getElementById("LTCchart_div")
  );
  chart3.draw(data3, options3);

  // interval for adding new data every 5000ms
    let index = 0;
        setInterval(function() {

    			$.ajax({

				dataType: 'json', // type of response data
		    	url : "https://api.coinbase.com/v2/prices/LTC-USD/spot",
		    	type : 'GET',
		    	success : function(response) {
			    	value = parseInt(response.data.amount, 10)
			    	data3.addRow([index, value]);
    				chart3.draw(data3, options3);
    				index+=5;
		    	},
		    })
    		}, 5000);
}