const express = require('express');
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000 


const db = require('./config/database')

db.authenticate()
    .then(() => console.log('Connected'))
    .catch(error => console.log('Error: ' + error))


app.get('/',(req,res) => res.send('Hello'))

app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use('/users', require('./routes/Users'))
app.use('/companies', require('./routes/Companies'))
app.use('/education', require('./routes/UserEducations'))
app.use('/experience', require('./routes/UserExperiences'))
app.use('/companydetails', require('./routes/CompanyDetails'))
app.use('/jobs', require('./routes/Jobs'))
app.use('/applications', require('./routes/Applications'))
app.use('/usercontact', require('./routes/UserContacts'))
app.use('/events', require('./routes/Events'))
app.use('/registrations', require('./routes/Registrations'))


app.listen(PORT, console.log(`Server Started on PORT ${PORT}`))