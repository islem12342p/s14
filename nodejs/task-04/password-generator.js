// import generator from "generate-password"
const generator = require("generate-password");

// Random password generator
function generatePassword() {
  // Generate a 12-charater password that includes numbers and uppecase letters
  const password = generator.generate({
    length: 12,
    numbers: true,
    uppercase: true,
  });

  return password;
}

// log a random password to the console
console.log(generatePassword());
