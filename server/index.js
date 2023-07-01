import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import EvenementRouter from './routes/EvenementsComplets.js';
import NewsRouter from './routes/News.js'
import EvenementsENARRouter from './routes/EvenementENAR.js'
import AlbumsRouter from './routes/Albums.js'
import UsersRouter from './routes/Users.js'
import EvenementsCompletsFRRouter from './routes/EvenementsCompletsFR.js'
import EvenementsENRouter from './routes/EvenementsEN.js'
import NewsFRRouter from './routes/NewsFR.js'

const app = express()


app.use(bodyParser.json({ limit:'30mb', extended:true }))
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true }))
app.use(cors())

app.use('/EvenementsCompletsAR',EvenementRouter)
app.use('/NewsAR' ,NewsRouter)
app.use('/EvenementsENAR',EvenementsENARRouter)
app.use('/Albums',AlbumsRouter)
app.use('/Users',UsersRouter)
app.use('/EvenementsCompletsFR',EvenementsCompletsFRRouter)
app.use('/EvenementsEN',EvenementsENRouter)
app.use('/NewsFRRouter',NewsFRRouter)

const CONNECTION_URL = 'mongodb+srv://houssem:houssem123@cluster0.iehdpv8.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT}`)))
        .catch((error) => console.log(error.message));
