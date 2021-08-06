import express from 'express'
import fileUpload from 'express-fileupload'
const app = express()

app.use(fileUpload(
))
app.get('/', (req, res) => {
  res.json({
    message: '6 foot'
  })
  }
)

app.post('/data', (req, res) => {
  console.info(req.files.file.name)
  res.json({
    message: 'Received!'
  })
})
const port = 9700
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
} )