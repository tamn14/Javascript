
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymble) {
    const lowercaseChars = "aksdjahsjaasdhkaskdb";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const numberChars = "0123456789"; 
    const symbleChars = "!@%#*&*($%^%$"; 
 
    let allowChars = "";
    let passWord = ""; 
 
    allowChars += includeLowerCase ? lowercaseChars : "";
    allowChars += includeUpperCase ? upperCaseChars : "";
    allowChars += includeNumber ? numberChars : "";
    allowChars += includeSymble ? symbleChars : ""; 
 
    if (length <= 0) {
       return "Password length must be at least 1"; 
    }
 
    if (allowChars.length === 0) {
       return "At least 1 set of characters needs to be selected"; 
    }
 
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * allowChars.length); 
       passWord += allowChars[randomIndex]; 
    }
 
    return passWord;
 }
 
 const passwordLength = 12;
 const includeLowerCase = true;
 const includeUpperCase = true;
 const includeNumber = true;
 const includeSymble = true;
 
 const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymble);
 
 console.log("Generated password: " + password);
 