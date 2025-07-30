const result = document.getElementById("password-result");
const genarate = document.getElementById("genarate");

const digits = "0123456789";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
const randomPassGenarator = () => {
  const length = 12;
  const allCharacter =
    digits + lowercaseLetters + uppercaseLetters + specialCharacters;
  let password = "";
  console.log(allCharacter);

  for (let i = 0; i <= length; i++) {
    let index = Math.floor(Math.random() * allCharacter.length);
    let randomCharator = allCharacter[index];
    password += randomCharator;
  }
  result.value = password;
};
genarate.addEventListener("click", randomPassGenarator);
