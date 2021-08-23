import fetch from 'node-fetch';

let response = await fetch('https://felight.io');

let text = await response.text();
console.log(text);