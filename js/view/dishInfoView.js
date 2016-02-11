//ExampleView Object constructor
var DishInfoView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.dishName = container.find("#dishName");
	this.dishImage = container.find("#dishImage");
	this.dishInfo = container.find("#dishInfo");
	this.ingredientTable = container.find("#ingredientTable");

	var id = 1;

	dish = model.getDish(id);

	// register to observe the model
	// adds this to observer list in model
	model.addObserver(this);

	this.loadIngredientList = function() {
		//update containers with data
		this.dishName.html(String(dish.name));
		this.dishImage.html("<img src='images/" + String(dish.image) + "'/>");
		this.dishInfo.html(String(dish.description));

		var ingredientList = "<tr class='table-header'>"
							+ "<td colspan='4'>Ingredients</td>"
						+ "</tr>";

		// for each ingredient for this dish
		for (var i = 0; i < dish.ingredients.length; i++) {
			var currIngredient = dish.ingredients[i];
			
			var ingredient = "<tr>"
				+ "<td class='amount'>" + String(currIngredient.quantity) + " " + String(currIngredient.unit) + "</td>"
				+ "<td class='name'>" + String(currIngredient.name) + "</td>"
				+ "<td class='currency'>SEK</td>"
				+ "<td class='price'>" + String(currIngredient.price) + "</td>"
			+ "</tr>"

			// add the ingredient to the ingredient list
			ingredientList = ingredientList + ingredient;
		}

		ingredientList = ingredientList + "<tr>"
							+ "<td colspan='2' class='border-top'>"
								+ "<button class='btn btn-primary btn-sm'>Confirm dish</button>"
							+ "</td>"
							+ "<td class='border-top'>SEK</td>"
							+ "<td class='total border-top' id='totalPrice'>" + String(model.getDishPrice(dish.id)) + "</td>"
						+ "</tr>";

		// update the ingredient table with the ingredient list
		this.ingredientTable.html(ingredientList);
	}

	this.update = function() {
		this.loadIngredientList();
	}

	this.loadIngredientList();
}
 
