import express from 'express'
import cors from 'cors'
const app = express()
import { readFile } from 'fs'

app.use(cors())

app.get('/posts', (req, res) => {
  const filePath = './server/posts.json'
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading posts.json:', err)
      res.status(500).json({ error: 'Failed to read file' })
    } else {
      res.json(JSON.parse(data))
    }
  })
})

const PORT = 8000
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}/posts`)
})
