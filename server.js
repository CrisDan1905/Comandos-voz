const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/comandos.html')));

app.listen(3000, () => console.log('todo bien todo bonito'));