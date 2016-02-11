$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	var allDishesView = new AllDishesView($("#allDishesView"), model);

	var dishInfoView = new DishInfoView($("#dishInfoView"), model);

});