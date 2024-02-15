const socket = io('ws://localhost:3000');

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})


const sendMessage = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.querySelector('input').value = '';
};


document.querySelector('button').addEventListener('click', sendMessage);

document.querySelector('input').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});