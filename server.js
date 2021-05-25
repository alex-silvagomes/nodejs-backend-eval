// Library
const express = require('express');
const formData = require('express-form-data');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//Import Routes Here
const info = require('./routes/api/info.js')
const index = require('./routes/api/index.js')

// Init Middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(formData.parse())


//Define Routes
app.use('/api/quality-gate/info', info);
app.use('/', index);

app.use(express.static(path.join(__dirname, "public")));

//Serve Static assets in production
//Configuration for Express to behave correctly in production environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}
 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.group(`  Servidor rodando na porta ${PORT}`));