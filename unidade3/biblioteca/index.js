import express from 'express'
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)




app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})