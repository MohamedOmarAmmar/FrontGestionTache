const express = require('express');

const app = express();

app.use(express.static('./dist/FrontGestionTache'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/FrontGestionTache/'}),
);

app.listen(process.env.PORT || 8080);
