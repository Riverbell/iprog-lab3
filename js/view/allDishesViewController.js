//ExampleViewController Object constructor
var AllDishesViewController = function(view, model, overallController) {
 
	view.search.click(function(){
		//när en klickar på search-knappen, uppdatera viewn

	});
 
	view.dishType.godtyckligt val{
		//uppdatera beroende på vilken vald dishtype
	});

	view.dish.click(function(){
		overallController.dishInfo();
		//när klickat på en dish, kom till infodish-view.

	});
}


//dinner_overview --> hårdkodat 4 pers, ligga i viewn, ta info från modellen

//när en valt en rätt, kom tillbaka till selectDish-view
//lägg till dish i menu (kanske i "vanliga" controllern) --> dishInfoController