const mysentence = "I am learning Node.js set timeout and set interval";
console.log(mysentence);


setTimeout(() => {
    console.log('This message is displayed after a 3 second delay.');
}, 3000);

const intervalId = setInterval(() => {
    console.log('This message is displayed every 2 seconds.');
    clearInterval(intervalId);
}, 2000);


console.log('Stopped the interval.');