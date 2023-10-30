const strength = { 
	1: "very Weak", 
	2: "Weak", 
	3: "Meduim", 
	4: "Strong", 
}; 
function checkStrength(pass) { 
	if (pass.length > 15) 
		return console.log( 
			pass + " Password is too lengthy"
		); 
	else if (pass.length < 8) 
		return console.log( 
			pass + " Password is too short"
		); 

	let regex = 
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
	if (regex.test(pass)) { 
		return console.log(pass 
		+ " Password is strong"); 
	} 
	let count = 0; 
	let regex1 = /[a-z]/; 
	if (regex1.test(pass)) count++; 
	let regex2 = /[A-Z]/; 
	if (regex2.test(pass)) count++; 
	let regex3 = /[\d]/; 
	if (regex3.test(pass)) count++; 
	let regex4 = /[!@#$%^&*.?]/; 
	if (regex4.test(pass)) count++; 

	console.log(pass, "Pasword is " + strength[count]); 
} 
let passwords = [ 
	"u4thdkslfheogica", 
	"G!2ks", 
	"GeeksforGeeks", 
	"Geeks123", 
	"GEEKS123", 
	"Geeks@123#", 
]; 
passwords.map((e) => checkStrength(e));