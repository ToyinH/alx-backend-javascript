// 1-stdin.js

// Display message to the user
console.log('Welcome to Holberton School, what is your name?');

// Read user input from stdin
process.stdin.once('data', (data) => {
  const name = data.toString().trim();

  // Display user's name
  console.log(`Your name is: ${name}`);

  // Display closing message
  console.log('This important software is now closing');

  // Exit the program
  process.exit(0);
});
