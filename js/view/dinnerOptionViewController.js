//ExampleViewController Object constructor
var DinnerOptionViewController = function(view, model) {
 
	view.plusButton.click(function(){
		console.log("plus click");
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		console.log("minus click")
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
}