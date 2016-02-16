$(function() {
	//We instantiate our model
	
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var indexView = new IndexView($("#indexView"), model);

	var dinnerOptionView = new DinnerOptionView($("#dinnerOptionView"), model);
	
	var dinnerOptionViewController = new DinnerOptionViewController(dinnerOptionView,model);

	var allDishesView = new AllDishesView($("#allDishesView"), model);

	var dishInfoView = new DishInfoView($("#dishInfoView"), model);

	var fullMenuView = new FullMenuView($("#fullMenuView"), model);

	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
});