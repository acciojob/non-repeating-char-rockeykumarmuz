function firstNonRepeatedChar(s) {
 // Write your code here
	let n = s.length;
			let freq = new Array(256).fill(0);

			for (let i = 0; i < n; i++) {
				freq[s.charCodeAt(i)]++;
			}

			for (let i = 0; i < n; i++) {
				if (freq[s.charCodeAt(i)] == 1) {
					return s.charAt(i);
				}
			}
	
			return null;
}
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
