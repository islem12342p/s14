// import fs from "fs"
const fs = require("fs");

// Create a file
fs.open("welcome.txt", "w", (err, file) => {
  // If an error occured (due to file inexistence, inaability to create file, etc.)
  if (err) {
    console.log(err);
    return;
  }

  // Write content to file
  fs.writeFile(file, "Hello Node", (err) => {
    if (err) console.log(err);
  });
  return;
});
