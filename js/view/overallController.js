//Overall controller
var OverallController = function(indexView, dinnerOptionView, allDishesView, dishInfoView, fullMenuView, dinnerOverviewView, model) {
	//hides and shows views based on user interation
	//controllers of the individual views send messages to 
	//the overall controller
	this.indexView = indexView;
	this.dinnerOptionView = dinnerOptionView;
	this.allDishesView = allDishesView;
	this.dishInfoView = dishInfoView; 
	this.fullMenuView = fullMenuView; 
	this.dinnerOverviewView = dinnerOverviewView; 
	this.model = model;

	this.hideView = function(view) {
		view.container.hide();
	}

	this.showView = function(view) {}

	// index -> selectDish
	//behöver ingen input
	// ska hidea indexView???
	// ska visa dinnerOptionView och allDishesView
	this.createDinner = function(view) {
		this.hideView(this.indexView);
	}
}