function fizzbuzz(limit) {
	
	for (var x = 1; x<= limit; x++ ) {

		if ( (x%3 === 0) && (x%5 === 0) ) {

			console.log(x+" FizzBuzz");

		}else{

			if (x%3 === 0) {

				console.log(x+" Fizz");

			}else if (x%5 === 0) {

				console.log(x+" Buzz");

			}
		}
	}
};

fizzbuzz(20);