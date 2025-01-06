// Tugas: Gunakan closure untuk membuat validator input

function createValidator(minLength) {
	return function (input) {
		if (input.length >= minLength) {
			console.log('Input is valid');
		} else {
			console.log('Input is too short');
		}
	};
}

const validateInput = createValidator(5);
validateInput('Hi');
validateInput('Helloww');
