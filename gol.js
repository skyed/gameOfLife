$(function () {
	var CELL_SIZE = 10,
		CELL_ALIVE_COLOR = "#2ecc71",
		CELL_DEAD_COLOR = "#e74c3c",
		GENERATION_INTERVAL = 2500,
		gameGrid = new Array(70);

	function Cell() {
		this.xPoint = 0;
		this.yPoint = 0;
		this.fillStyle = "white";
		this.dead = true;
		this.liveNeighbors = 0;
	}
		

	function getGrid() {
		var c = document.getElementById("grid");
		return c.getContext("2d");
	}

	function initGrid() {
		var grid = getGrid();

		var canvasWidth = $("#grid").width(),
			canvasHeight = $("#grid").height();
		
		// place vertical grid lines
		for (var i = 0; i < canvasWidth; i += CELL_SIZE) {
			grid.moveTo(i, 0);
			grid.lineTo(i, canvasWidth);	
		}
		// place horizontal grid lines
		for (var j = 0; j < canvasHeight; j += CELL_SIZE) {
			grid.moveTo(0, j);
			grid.lineTo(canvasWidth, j);
		}
		
		// draw grid lines
		grid.strokeStyle = "#ddd";
		grid.stroke();
	}
	function initArray() {

		for(var k = 0; k < 70; ++k)
		{
			gameGrid[k] = new Array(40);
		}
	}
	initGrid();
	initArray();

    
    $("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function () {
        var selector = $(this).attr("id");
        selector = "#" + selector.replace("btn", "select");
        var pattern = $(selector).val();
        drawPattern(pattern);
    });

    
    var isRunning = false;
    function runGoL() {
		if (!isRunning) {
			return;
		}
		evolveStep();
		setTimeout(runGoL, GENERATION_INTERVAL);
    }
    $("#start-game").click(function() {
    	isRunning = true;
    	runGoL();
    });
    $("#stop-game").click(function() {
    	isRunning = false;
    });



    /********************
     *	YOUR CODE HERE  *
     ********************/


	function evolveStep(){
		console.log("Evolve step called");
	}

    function update(){

    }

    function populateGameGrid(){

    }

    function countNeighbors(grid, position){

    }

    function validPosition(grid, position){

    }


    function drawPattern(patternName) {

    }

    function drawStillLife(patternName) {

    }

    function drawOscillator(patternName) {

    }

    function drawSpaceship(patternName) {

    }
});