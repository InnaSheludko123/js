function generatePassword(length) {
    let password = '';
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz';
    let numbers = 1234567890;
    
    let allCharacters = upperCaseLetters + lowerCaseLetters + numbers ;

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  console.log(`Пароль: ${password}`);
}
generatePassword(8);