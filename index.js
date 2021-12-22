const express = require('express')
const app = express()
const PORT = 5000
const Smart_contract = require('./routes/smart_contract')



require('dotenv').config();
require('./config/database').connect() 

app.use(express.json())

app.use('/routes', Smart_contract);


app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});