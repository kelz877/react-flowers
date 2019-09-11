const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())


// let flower = models.Flower.build({
//     name: "Pink Roses",
//     description: "Pink roses in a basket in a field",
//     imageurl: "https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_1280.jpg"
// })

// flower.save()

app.get('/flowers', (req, res) => {
    models.Flower.findAll().then(flowers => {
        res.json(flowers)
    })
})

app.post('/flowers', (req, res) => {
    let name = req.body.name
    let description = req.body.description
    let imageurl = req.body.imageurl
    
    let flower = models.Flower.build({
        name, description, imageurl
    })
    flower.save().then(savedFlower => {
        res.send("success")
    })
})

app.get('/flowers/:id', (req, res) => {
    let flower_id = req.params.id
    models.Flower.findOne({
        where: {
            id: flower_id
        }
    }).then(flower => {
        res.json(flower)
    })
    
})

app.post('/update-flower', (req, res) => {
    let name = req.body.name
    let description = req.body.description
    let imageurl = req.body.imageurl
    let id = req.body.id

    let flower = models.Flower.update({
        name: name,
        description: description,
        imageurl: imageurl
        },{
            where: {
                id: id
            }
    })
    .then(() => {
        res.send("Update successful!")
    }).catch(err => console.log(err))
})


app.post('/delete-flower', (req, res) => {
    let flower_id = req.body.id
    models.Flower.destroy({
        where: {
            id: flower_id
        }
    })
    res.send("Deleted")
})

app.listen(PORT, () => {
    console.log("server is running...")
})