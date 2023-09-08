function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	let freq = [26];

	for(int i=0; i<n; i++) {
		freq[s.charAt(i)-'a']++;
	}

	for(int i=0; i<n; i++) {
		if(freq[s.charAt(i)-'a']>0 && freq[s.charAt(i)-'a']==1) {
			return s.charAt(i);
		}
	} 
	
	return null;
}
 const input = prompt("Enter a string");
 alert(firstNonRepeatedChar(input)); 
