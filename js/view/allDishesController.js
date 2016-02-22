var AllDishesController = function(view, model, overallController) {

	//när något som har klassen dish-container som ligger i containern
	//klickas på, körs denna funktion
 	view.container.on('click', '.dish-container', function(){

	    //this är den dish-container som blivit klickad på
	    //då skickar vi med dess id i selectedDish
	    overallController.selectedDish(this.id);
	});

 

}