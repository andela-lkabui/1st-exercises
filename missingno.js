function missing(myArray) {

	myArray.sort();

	var expected = 1;
	var missing = false;

	for (var i=0; i<myArray.length; i++ ){

		if (myArray[i] != expected){
			missing = true;	

			return expected;
		}

		expected += 1;
	}

	if (!missing) {
		return "nothing missing";
	}
	
};

var arr = [2,1,3,4,5,6];

console.log( missing(arr) );

