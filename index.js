import express from 'express'
import cors from 'cors'
import { getAllPlants, addPlant } from './src/plants.js'
const PORT = 3005

const app = express()
app.use(express.json())
app.use(cors())

app.get("/plants", getAllPlants)
app.post("/plants", addPlant)
// app.delete("/plants/:plantId", deletePlant)





app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})
