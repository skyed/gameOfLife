$(function () {
	var CELL_SIZE = 10, // each cell will be 10 x 10 pixels
		CELL_ALIVE_COLOR = "#2ecc71",
		CELL_DEAD_COLOR = "#e74c3c",
		NUM_COLS = 70,
                NUM_ROWS = 40,
		gameGrid = new Array(NUM_ROWS);

	var cell = {
		xPoint: 0,
		yPoint: 0,
		fillStyle: 'white',
		dead: false,
		liveNeighbors: 0
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

	initArray();

	function initArray() {

		for(var k = 0; k < NUM_ROWS; ++k)
		{
			gameGrid[k] = new Array(NUM_COLS);
		}
	}

    $("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function () {
        var selector = $(this).attr("id");
        selector = "#" + selector.replace("btn", "select");
        var pattern = $(selector).val();
        drawPattern(pattern);
    });

    
    $("#start-game").click(function() {

    });
    $("#stop-game").click(function() {

    });



    /********************
     *	YOUR CODE HERE  *
     ********************/

    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Changes the grid to evolve the cells
     *          to the next generation according to
     *          the rules of the Game of Life.
     * calls: countNeighbors, update
     */
    function evolveStep(){

    }

    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Updates the alive/dead status of each cell
     *         based on its count of live neighbors.
     */
    function update(){

    }

    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Fills and populates gameGrid with dead cells.
     */
    function populateGameGrid(){

    }

    /** 
     * Requires: xCoord and yCoord are within bounds of the array.
     * Modifies: Nothing.
     * Effects: Counts the number of live neighbors for
     *          the cell and returns the count.
     * calls validPosition
     */
    function countNeighbors(grid, xCoord, yCoord){

    }

    /**
     * Requires: xCoord and yCoord are integers.
     * Modifies: Nothing.
     * Efects: Returns true if xCoord and yCoord are within
     *         bounds of the array. Returns false otherwise.
     */
    function validPosition(xCoord, yCoord){

    }

    /**
     * Requires: patternNema is a string 
     * Modifies: 
     * Effects: 
     * calls drawStillLife, drawOscillator, drawSpaceship
     */
    function drawPattern(patternName) {

    }

    function drawStillLife(patternName) {

    }

    function drawOscillator(patternName) {

    }

    function drawSpaceship(patternName) {

    }
});
