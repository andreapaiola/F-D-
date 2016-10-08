"use strict" // yeah I want to see all and fast

var FadePaid = (function() {
	var body = document.body

	// eventually enhance compatibility
	/*
	if (!Date.now) {
	    Date.now = function() { return new Date().getTime() }
	}
	*/
	
	// seconds, like PHP
	var time = function(){
		return Math.floor(Date.now() / 1000)
	}

	var opacity = 1

	var start = time()

	var end = time()

	start = time() + (7 * 24 * 60 * 60) // default next week, change to what you want

	end = start + (7 * 24 * 60 * 60) // default a week later, change to what you want		

	/*
	// Testing
	
	//start = time() - (0 * 24 * 60 * 60) // 0 day ago
	//start = time() - (1 * 24 * 60 * 60) // 1 day ago
	//start = time() - (1 * 24 * 60 * 60) // 2 day ago
	//start = time() - (3 * 24 * 60 * 60) // 3 days ago
	start = time() - (5 * 24 * 60 * 60) // 5 days ago
	//start = time() - (6 * 24 * 60 * 60) // 6 days ago
	//start = time() - (7 * 24 * 60 * 60) // 7 days ago
	end = start + (7 * 24 * 60 * 60) // now you have 7 days to pay
	//end = start + (3 * 24 * 60 * 60) // now you have 3 days to pay
	*/		

	if( time() > end ) {
		opacity=0 // YOU ARE TERMINATED
	} else if( start <= time() && end >= time() ) {
		opacity = ( end - time() ) / ( end - start )
	}

	//console.log(opacity)

	body.style.opacity = opacity
	
	
})()


