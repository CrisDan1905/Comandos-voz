const commands = ['derecha', 'izquierda', 'abajo', 'arriba', 'gira'];
const element = document.querySelector('#boxy');
const padding = '2rem';
const elementWidth = window.getComputedStyle(element).getPropertyValue('width');
const elementheight = window.getComputedStyle(element).getPropertyValue('height');
var counter = 0;


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new webkitSpeechRecognition();

recognition.start();

recognition.addEventListener('result', (e) => {
    console.log(e);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    if (e.results[0].isFinal) {
       const command = commands.find(command => transcript.includes(command));
       console.log(command)
       if (command)
        executeCommand(command);
    }
});

recognition.addEventListener('end', recognition.start);

function executeCommand(command) {
    switch (command) {
        case 'derecha':
            moveToRight();
            break
        case 'izquierda':
            moveToLeft();
            break
        case 'abajo':
            moveToBottom();
            break
        case 'arriba':
            moveToTop();
            break
        case 'gira':
            rotate();
            break
    }
}

function moveToRight() {
    console.log(element)
    element.style.left = `calc(100% - ${padding} - ${elementWidth}`;
}

function moveToLeft() {
    console.log(element)
    element.style.left = `${padding}`;
}

function moveToBottom() {
    console.log('bajo')
    element.style.top = `calc(100% - ${padding} - ${elementheight})`
}

function moveToTop() {
    element.style.top = `${padding}`;
}

function rotate() {
    element.style.transform = `rotate(${counter += 360}deg)`;
}