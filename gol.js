$(function () {
	var CELL_SIZE = 10;  // each cell will be 10 x 10 pixels	
	var gameGrid = new Array(70);

	var cell = {
		xPoint: 0,
		yPoint: 0,
		fillStyle: 'white',
		dead: false
	};

	function getGrid() {
		var c = document.getElementById("grid");
		return c.getContext("2d");
	}

        // This function is given to you
        // It draws the grid lines on the canvas grid object
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
        
        // this function call initializes the grid by drawing the grid
        // lines on the canvas grid object
	initGrid();

        // TODO: You need to complete this function. It is started for you.
        // Requires: Nothing.
        // Modifies: 
        // Effects: Creates a 2D array of cells
=======
	initArray();

        // TODO: You need to complete this function. It is started for you.
        // Requires: Nothing.
	function initArray() {

		for(var k = 0; k < 70; ++k)
		{
			gameGrid[k] = new Array(40);
		}
	}

    $("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function () {
        var selector = $(this).attr("id");
        selector = "#" + selector.replace("btn", "select");
        var pattern = $(selector).val();
        drawPattern(pattern);
    });


    /********************
     *	YOUR CODE HERE  *
     ********************/

    function drawPattern(inputPattern) {

    }

    function drawStillLife() {

    }

    function drawOscillator() {

    }

    function drawSpaceship() {

    }
});
