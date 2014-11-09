$(function () {
	var CELL_SIZE = 10;
	var gameGrid = new Array(70);

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

		for(var k = 0; k < 70; ++k)
		{

			gameGrid[k] = new Array(40);
		}
		
	}
	initGrid();


	function initArray() {

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