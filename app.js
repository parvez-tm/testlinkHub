
const express = require('express')
const app = express()
// const prosess = require('dotenv').config()


var cors = require('cors')
const port = process.env.PORT
require('./connection')
require('./models-list')
// // const swaggerUi = require('swagger-ui-express');
// // const swaggerDocument = require('./swagger.json');

// // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/public', express.static('public'));
app.use(express.json())

app.use(cors({
    origin: '*'
}))

// app.use('/user', require('./user/user-api'))
// app.use('/rough', require('./rough/api'))
// app.use('/image',require('./imageUpload/image-api'))
app.use('/project-manager', require('./project-manager/pm-api'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

