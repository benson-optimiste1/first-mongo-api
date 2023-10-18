import { db } from './connectDb.js'
export function getAllPlants(req, res){
    db.collection('plants').find({}).toArray()
    .then(plants => {
        res.send(plants)
    })
    .catch(err => {
        res.status(500).send({succces: false, message: err})
    })
}

export function addPlant(req, res){
    const newPlant = req.body
    db.collection('plants').insertOne(newPlant)
    .then(() => {
        res.status(201).send({message: "Plants added", succces: true })
    })
    .catch(err => {
        res.status(500).send({succces: false, message: err})
    })
}