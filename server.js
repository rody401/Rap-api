const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Something',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 28,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    if(rappers[rapName]){
        res.json(rappers[rapName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})