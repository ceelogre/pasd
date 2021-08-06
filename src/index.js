import express from 'express'
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
  res.json({
    message: '6 foot'
  })
  }
)
app.post('/geodata', (req, res) => {
  res.json({
    message: req.body
  })
})
const port = 9700
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
} )