// // defining the server port
// const port = 5000

// // initializing installed dependencies
// const express = require('express')
// require('dotenv').config()
// const axios = require('axios')
// const app = express()
// const cors = require('cors')
// app.use(cors())

// // listening for port 5000
// app.listen(port, ()=> console.log(`Server is running on ${port}` ))

// // API request
// app.get('/', (req,res)=>{    
//     const playerName = req.query.name;
//     const options = {
//         method: 'GET',
//         url: 'https://fortnite-api.com/v2/stats/br/v2?name=' + playerName,
//         headers: {
//             'Authorization':process.env.VITE_API_KEY,
//         }
//    };
   
//     axios.request(options).then(function (response) {
//         res.json(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// })

const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    //const playerName = req.query.name;
    const options = {
        method: 'GET',
        url: 'https://fortnite-api.com/v2/stats/br/v2?name=MochaWall864836',
        headers: {
            'Authorization': process.env.VITE_API_KEY
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch player data.'})
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))