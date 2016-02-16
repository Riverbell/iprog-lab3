
var indexView = function(container, model) {

	this.continueButton = container.find("#continueToDinner");

	this.indexView = container.find("#indexView");
	
	model.addObserver(this);


}