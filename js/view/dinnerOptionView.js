//ExampleView Object constructor
var DinnerOptionView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var numberOfGuests = container.find("#numberOfGuests");
	var menuContainer = container.find("#menuTable");

	// register to observe the model
	// adds this to observer list in model
	model.addObserver(this);

	var loadView = function() {
		numberOfGuests.html(model.getNumberOfGuests());

		var dinnerString = "<tr class='table-header'>"
						+ "<td>Dish name</td>"
						+ "<td class='right-align'>Cost</td>"
					+ "</tr>";
		var menu = model.getFullMenu();

		for (var i = 0; i < menu.length; i++) {
			var dish = "<tr>"
						+ "<td>" + String(menu[i].name) + "</td>"
						+ "<td class='right-align'>" + String(model.getDishPrice(menu[i].id)) + "</td>"
					+ "</tr>";

			dinnerString = dinnerString + dish;
		}

		dinnerString = dinnerString + "<tr>"
						+"<td>Pending</td>"
						+"<td class='right-align'>0.00</td>"
					+"</tr>"
					+"<tr class='right-align'>"
						+"<td colspan='2' class='border-top'>"
							+"SEK <span id='totalCost'>" + String(model.getTotalMenuPrice()) + "</span>"
						+"</td>"
					+"</tr>";

		menuContainer.html(dinnerString);


	}

	this.update = function() {
		loadView();
	}

	loadView();

}
 
