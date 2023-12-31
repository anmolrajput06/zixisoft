const express = require('express');
const app = express();
const PORT = 8000;
var bodyParser = require('body-parser'); 
var cors = require('cors'); 


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(cors()); 

app.use(require('./routes/task.route'))
app.use(require('./routes/category.route'))
app.use(require('./routes/signUp.route'))
app.use(require('./routes/password.route'))

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT} `);
});