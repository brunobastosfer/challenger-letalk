import express from 'express'
import cors from 'cors'
import { router } from './routes'

// import './database'

const app = express()

app.use(cors())
app.use(router)

app.listen(3333, () => console.log('Server running'))