function beerAndFries(items) {

	var beers = items.filter(function(i) {
		return i.type == "beer";
	}).map(function(i) {
		return i.score;
	}).sort(function(i, j) {
		return i < j;
	});

	var fries = items.filter(function(i) {
		return i.type == "fries";
	}).map(function(i) {
		return i.score;
	}).sort(function(i, j) {
		return i < j;
	});

	var result = 0;
	for (var i = 0; i < beers.length; i++) {
		result += beers[i] * fries[i];
	};
	console.log(beers);
	console.log(fries);
	return result;
}