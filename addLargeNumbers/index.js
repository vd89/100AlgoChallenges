/** @format */

const addLargeNumbers = (str1, str2) => {
	let sum = '';
	let r = 0;
	let s1, s2, i, len;
	if (str1.length < str2.length) {
		len = str2.length;
		s1 = str1;
		s2 = str2;
	} else {
		len = str1.length;
		s1 = str2;
		s2 = str1;
	}
	s1 = s1.split('').reverse();
	s2 = s2.split('').reverse();
	for (i = 0; i < len; i++) {
		let t = (i < s1.length ? parseInt(s1[i]) : 0) + parseInt(s2[i]) + r;
		sum += t % 10;
		r = t < 10 ? 0 : Math.floor(t / 10);
	}
	if (r > 0) {
		sum += r;
	}
	sum = sum.split('').reverse();
	while (sum[0] == '0') {
		sum.shift();
	}
	return sum.length > 0 ? sum.join('') : '0';
};

let string2 = '99999999999999549';
let string1 = '9999999999999999999999999999999999999999999999999';

console.log(addLargeNumbers(string1, string2));
