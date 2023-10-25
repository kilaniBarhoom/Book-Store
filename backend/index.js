import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/booksRoute.js'

const app = express()

app.use(express.json())

//MiddleWare for handling cors policy
app.use(cors())


app.get('/', (request, response) => {
    console.log('tottaly works');
    return response.status(234).send('Welcome son')
})

app.use('/books', router)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`app connected to db`);
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(`Error happened ${err}`);
    })