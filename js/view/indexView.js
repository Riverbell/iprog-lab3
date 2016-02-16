
var IndexView = function(container, model) {

	this.container = container;
	this.continueButton = container.find("#continueToDinner");

	model.addObserver(this);

}