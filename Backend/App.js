const express = require('express');
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000 
const mongoose = require('mongoose')

const uri = "mongodb+srv://root:aditya@handshake-8jewx.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })


app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use('/users', require('./routes/Users'))
app.use('/companies', require('./routes/Companies'))
app.use('/jobs', require('./routes/Jobs'))
app.use('/applications', require('./routes/Applications'))
app.use('/events', require('./routes/Events'))
app.use('/registrations', require('./routes/Registrations'))
app.use('/messages',require('./routes/Messages'))
// app.use('/upload', require('./routes/Upload'))


app.listen(PORT,console.log(`Server Started on PORT ${PORT}`))