const websocket = new WebSocket('ws://localhost:3000/');


function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input')
    if (input.value) {
        websocket.send(input.value);
        input.value = ""
        input.focus();
    }
}

document.querySelector('form').addEventListener('submit'.sendMessage);

WebSocket.addEventListener('Message', ({ data }) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild('li');


});