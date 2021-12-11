function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function DisplayBTC() {
	var x = document.getElementsByClassName("myCharts");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	   }
	x = document.getElementById("BTCchart_div");
	x.style.display = "block";
}

function DisplayLTC() {
	var x = document.getElementsByClassName("myCharts");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	   }
	x = document.getElementById("LTCchart_div");
	x.style.display = "block";
}

function DisplayETH() {
	var x = document.getElementsByClassName("myCharts");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	   }
	x = document.getElementById("ETHchart_div");
	x.style.display = "block";
}