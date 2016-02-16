
var IndexView = function(container, model) {

	this.continueButton = container.find("#continueToDinner");

	model.addObserver(this);

}