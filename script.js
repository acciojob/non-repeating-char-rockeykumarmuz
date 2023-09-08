function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	let freq = [26];

	for(let i=0; i<n; i++) {
		freq[str[i].charCodeAt(0)]++;
	}

	for(let i=0; i<n; i++) {
		if(freq[s[i].charCodeAt(0)]>0 && freq[s[i].charCodeAt(0)]==1) {
			return s.charAt(i);
		}
	} 
	
	return null;
}
 //const input = prompt("Enter a string");
 alert(firstNonRepeatedChar(input)); 
