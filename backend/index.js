require('dotenv').config({path:"./"});
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.LOCAL_PORT || 3001;
const API = require("./api")

app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

// Implement CORS
app.use(cors());
app.options('*', cors());

app.all('/api/*',async (req, resp) => {
    const {res,err} = await API(req.url, req.method)

    if(res){
        resp.json(res.data)
    }
    if(err){
        console.log(err);
        resp.status(err?.response?.status).send(err?.response?.data?.toString())
    }
});

app.get("/:id", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
