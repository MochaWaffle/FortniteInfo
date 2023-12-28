// defining the server port
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{    
    const options = {
        method: 'GET',
        url: 'https://fortnite-api.com/v2/stats/br/v2',
        headers: {
            'Authorization':import.meta.env.VITE_API_KEY,
        }
   };
   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})
