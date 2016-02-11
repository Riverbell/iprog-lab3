$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	var dinnerOptionView = new DinnerOptionView($("#dinnerOptionView"), model);

	var allDishesView = new AllDishesView($("#allDishesView"), model);

	var dishInfoView = new DishInfoView($("#dishInfoView"), model);

	var fullMenuView = new FullMenuView($("#fullMenuView"), model);

	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
});