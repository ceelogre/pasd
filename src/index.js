import express from 'express'
import fileUpload from 'express-fileupload'
import XLSX from 'xlsx'
import path from 'path'
const __dirname = path.resolve()
const app = express()

app.use(fileUpload({
  //Parse nesting
}))
app.get('/', (req, res) => {
  res.json({
    message: '6 foot'
  })
  }
)

app.post('/data', (req, res) => {
  let file = req.files.file
  let uploadPath = __dirname +'/' + file.name
  console.info(uploadPath, ' path')
  // Read the file
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error(err, ' error moving file')
      return
    }
    console.info('File moved to ', uploadPath)
    console.info((uploadPath))
    const workbook = XLSX.readFile(file.name)
    // get the first sheet name 
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    console.info(sheet)
    res.json({
      message: '6 foot'
    })
  })
})

const port = 9700
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
} )