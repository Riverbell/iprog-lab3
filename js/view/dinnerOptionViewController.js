//ExampleViewController Object constructor
var DinnerOptionViewController = function(view, model, overallController) {
 
	view.plusButton.click(function(){
		console.log(view.plusButton);
		console.log("plus click");
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		console.log("minus click")
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmButton.click(function(){
		overallController.confirmDinner()

	});
}