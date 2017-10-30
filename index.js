// Code your solutions in this file
function printBadges(args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`Welcome ${args[i]}! You are employee #${i + 1}.`);
  }
  return args;
}

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.5) {
    count++;
  }

  return `You got ${count} tails in a row!`;
}
