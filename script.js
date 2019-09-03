// let numbers = [1, 5, 90, 60, 75, 100, 34, 55, 20, 65, 4];
//
// for(let i = 0; i<=numbers.length; i++) {
// 	if(numbers[i] > 50) {
// 		console.log('noice');
// 	} else if(numbers[i] < 10) {
// 		console.log('yo yo yo');
// 	} else {
// 		console.log('whaaaat');
// 	}
// }
//
// let fruitsBasket = ['orange', 'apple', 'grape', 'banana', 'watermelon', 'grape'];
//
// for(let i=0; i<=fruitsBasket.length; i++) {
// 	if(fruitsBasket[i] === 'banana') {
// 		console.log('high in potassium')
// 	} else if (fruitsBasket[i] === 'apple') {
// 		console.log('which one red or green?')
// 	} else if (fruitsBasket[i] === 'grape') {
// 		console.log('my fave!!')
// 	} else {
// 		console.log('ehhh their okay')
// 	}
// }


//Using the array filter prototype filter out all the words that start with the letter t.

// const gandalfQuote= "So do all who see such times but that is not for them to decide all you have to decide is what to do with the time that is given to us";
//
//
// const getWords = gandalfQuote.split(" ").filter(word => word.startsWith("t")).join(" ");
//
// console.log(getWords);

// const shawshank = "Get busy living or get busy dying that is god damn right";
//
// const olAndy = shawshank.split(" ").filter(word => word.startsWith("g"));
// const red = shawshank.split(" ").filter(word => word.startsWith("b"));
//
// console.log(olAndy);
// console.log(red);

//write a function that determines whether a student has passed of failed a test
// let numbers = [99, 67, 54, 78, 81, 85, 65, 88, 92, 94];
//
// 	for(let i=0; i<=numbers.length; i++) {
// 		if(numbers[i] <= 69) {
// 			console.log('FAILED')
// 		} else if(numbers[i] >= 70 && numbers[i] <= 89) {
// 			console.log('PASSED')
// 		} else {
// 			console.log('ACED IT!!')
// 		}
// 	}



	let maxNumber = new Array(24);
	for (let i=0; i < 24; i++) {
		maxNumber[i] = i + 1;
	}
	for (let i=0; i < maxNumber.length; i++) {
		if (maxNumber[i] % 2 === 0) {
			console.log('Codility');
		}
		if (maxNumber[i] % 3 === 0) {
			console.log('Test');
		}
		if (maxNumber[i] % 5 === 0) {
			console.log('Coders');
		}
		if (maxNumber[i] % 2 === 0 && maxNumber[i] % 3 === 0) {
			console.log('CodilityTest');
		}
		if (maxNumber[i] % 2 === 0 && maxNumber[i] % 5 === 0) {
			console.log('CodilityCoders');
		}
		if (maxNumber[i] % 3 === 0 && maxNumber[i] % 5 === 0) {
			console.log('TestCoders');
		}
		console.log(maxNumber[i]);
	}











