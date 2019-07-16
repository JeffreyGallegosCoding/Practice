array = [1, 2, 5, 7, 11, 73, 49, 31, 64];


for(i = 0; i<array.length; i++) {
	if(i < 7) {
		console.log('hey hey hey');
	} else if(i < 15) {
		console.log('wassssup');
	} else if(i % 2) {
		console.log('odd')
	} else {
		console.log('naa');
	}
}