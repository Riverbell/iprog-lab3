
var FullMenuView = function (container, model) {

	this.menuDishes = container.find("#menuDishes");

	//get all the dishes on the menu, returns the dish-id
	var dishes = model.getFullMenu();

	// use dish-id to get a list with dish-objects
	var dishList = [];
	for (var i in dishes) {
		var currentDish = model.getDish(dishes[i]);
		dishList.push(currentDish);
	}


	var dishString = " ";
	for (j in dishList) {
		// for every object in dishList
		var currentDish = dishList[j];
		// create part of dishString that will contain the values wanted for each dish
		var dishDiv = "<div class='row one'>"
							+ "<div class='col-md-6 halfPageContainer'>"
								+ "<div class='col-md-3 dish-image'>"
									+ "<img src='images/" + String(currentDish.image) + "'/>"
								+ "</div>"
								+ "<div class='col-md-8'>"
									+ "<h2 class='noMargin dishHeaderPadding'>"+ String(currentDish.name) + "</h2>"
									+ "<p>" + String(currentDish.description) + "</p>"
								+ "</div>"
							+ "</div>"
							+ "<div class='col-md-6 halfPageContainer'>"
								+ "<div class='col-md-9'>"
									+ "<h5 class='extraMargin dishHeaderPadding'>PREPARATION</h5>"
									+ "<p>" + String(currentDish.description) + "</p>"
								+ "</div>"
							+ "</div>"
						+ "</div>";
		dishString = dishString + dishDiv;
	}

	this.menuDishes.html(dishString);
}