import { emailValidate, validatePassword } from './helper.js';

describe('Test Handlers', function () {
	test('Check password validation [Correct password]', () => {
		var password = validatePassword('P@ssword123');
		expect(password).toEqual(true);
	});

	test('Check password validation [Incorrect password]', () => {
		var password = validatePassword('password123');
		expect(password).toEqual(true);
	});

	test('Check email validation', () => {
		var email = emailValidate('p@g.com');
		expect(email).toEqual(true);
	});
});
