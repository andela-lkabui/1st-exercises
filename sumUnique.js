function sumUnique(myArray) {
	
	var uniqueDigit = [];
	var currentIndex;

	for (var i=0; i<myArray.length; i++ ) {

		currentIndex = myArray[i].toString();

		for(var j=0; j<currentIndex.length; j++ ) {

			if (uniqueDigit.indexOf(currentIndex[j]) < 0 ) {
				uniqueDigit.push(currentIndex[j]);
			}
		}

	}

	var sum = 0;

	for (var i=0; i<uniqueDigit.length; i++) {
		sum += parseInt(uniqueDigit[i]);
	}

	return sum;
};

console.log( sumUnique([10, 20, 3, 5, 6, 23]) );