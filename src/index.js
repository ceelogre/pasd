import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.json({
    message: '6 foot'
  })
  }
)
const port = 9700
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
} )