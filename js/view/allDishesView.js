//ExampleView Object constructor
var AllDishesView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.container = container;
	this.dishContainer = container.find("#allDishes");
	this.currType = String(container.find("#dishType option:selected").val());
	this.dishes = model.getAllDishes(this.currType);

	
	// register to observe the model
	// adds this to observer list in model
	model.addObserver(this);

	// function that loads all the dishes
	this.loadDishes = function() {
		
		//gets all dishes
		//console.log(this.currType);

		// for each dish, add the info into the correct container
		for (var i = 0; i < this.dishes.length; i++) {
			var currentDish = this.dishes[i];

			//skapar ett div-element
			var dishDiv = document.createElement('div');
			dishDiv.className = "dish-container"; //lägger till classname
			dishDiv.id = String(currentDish.id); //lägger till id
			//lägger till innehållet i dishdiv (info om dishen)
			dishDiv.innerHTML = "<div class='dish-image'><img src='images/" 
			+ String(currentDish.image) + "'/></div><div class='dish-name'>" 
			+ String(currentDish.name) 
			+ "</div><div class='dish-info'>" + String(currentDish.description) 
			+ "</div>";
			
			//lägger in dishDiven i containern
			this.dishContainer.append(dishDiv);
		}

	}

	this.update = function() {
		this.loadDishes();
	}

	// load dishes on initialization
	this.loadDishes();
}
 
