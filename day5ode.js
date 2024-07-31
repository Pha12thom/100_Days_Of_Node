console.log('Starting combined example...');


const timeoutId = setTimeout(() => {
    console.log('This message is displayed after a 3 second delay.');
}, 3000);


const intervalId = setInterval(() => {
    console.log('This message is displayed every 2 seconds.');
}, 2000);


setTimeout(() => {
    clearTimeout(timeoutId);
    console.log('Cleared the timeout before it executed.');
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped the interval.');
}, 10000);