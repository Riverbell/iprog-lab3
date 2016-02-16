
var DinnerOverviewView = function (container, model) {

	this.menuOverview = container.find("#menuOverview");

	//get all the dishes on the menu, returns the dish-object
	var dishes = model.getFullMenu();

	var dishString = " ";
	var dishPrices = [];

	for (var i in dishes) {

		var currentDish = dishes[i];
	
		// create part of dishString that will contain the values wanted for each dish
		var currentDishPrice = model.getDishPrice(currentDish.id);
		dishPrices.push(currentDishPrice);
		var dishDiv = "<div class='dish-container'>"
						+ "<div class='dish-image'>"
							+ "<img src='images/" + String(currentDish.image) + "'/>"
						+ "</div>"
						+ "<div class='dish-name'>"
							+ String(currentDish.name)
						+ "</div>"
						+ "<div class='dish-price'>"
							+ String(currentDishPrice)
						+ " SEK</div>"
					+ "</div>";

		dishString = dishString + dishDiv;
	}

	var totalPrice = 0
	for (i in dishPrices) {
		var dishPrice = dishPrices[i];
		totalPrice = totalPrice + dishPrice;
	}

	var extraDiv = "<div class='dish-container verticalLine'>"
						+ "<div class='dish-price leftAlignPrice'>Total: <br/>" +  String(totalPrice) + " SEK</div>"
					+ "</div>"
					+ "<div class='horizontalLine'></div>"
					+ "<div class='horizontalLinePlacing'>"
						+ "<button class='btn btn-primary' type='submit'>Print Full Recipe</button>"
					+ "</div>";
	
	dishString = dishString + extraDiv;

	this.menuOverview.html(dishString);
}