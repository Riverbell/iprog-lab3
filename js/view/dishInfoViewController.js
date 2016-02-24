//ExampleViewController Object constructor
var DishInfoViewController = function(view, model, overallController) {
	
	view.dishConfirmButton.click(function(){
		overallController.confirmDish();
		console.log(view.dishID);
		model.addDishToMenu(view.dishID);


	});

}