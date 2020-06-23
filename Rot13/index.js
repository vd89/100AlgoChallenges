/** @format */

const rot13 = (str) => {
	return str.replace(/[a-zA-Z]/gi, (s) => {
		return String.fromCharCode(
			s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13),
		);
	});
};

const newStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log(rot13(newStr)); // nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM

console.log(rot13(rot13(newStr))); // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

console.log(rot13('hello')); // uryyb

console.log(rot13('HELLO')); // URYYB
