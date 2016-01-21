'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 var counter = 0;
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Different text now Bro");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(submitClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function submitClick(e) {
	var projectVal = $('#project').val();

	$(projectVal).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectVal + ".project-description").text(newText);
}

function projectClick(e) {
	e.preventDefault();

	var projectTitle = $(this).find("p").text();
	console.log("PROJECT TITLE: " + projectTitle);
	var jumbotronHeader = $(".jumbotron h1");
	console.log("JUMBOTRONHEADER: " + jumbotronHeader.text);
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if(counter == 0) {
	$(containingProject).append("<div class='project-description'><p>"+
	  "Description of project </p></div>");
	counter++;
	}
	else if(counter % 2 == 1) {
		$(".project-description").fadeOut();
		counter++;
	}
	else if (counter %2 == 0) {
		$(".project-description").show();
		counter++;

	}

}
