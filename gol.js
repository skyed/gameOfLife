$(function () {
	var gridArray = [];
	

	function getGrid() {
		var c = document.getElementById("grid");
		return c.getContext("2d");
	}

	function initGrid() {
		var grid = getGrid();

		
	}


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