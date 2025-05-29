const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    var d = new Date();
    var day = d.getDay();
    if (day == 0) {
        res.send('sunday');
    }
    else if (day == 1){
        res.send('monday');
    }
    else if (day == 2){
        res.send('tuesday');
    }
    else if (day == 3){
        res.send('wednesday');
    }
    else if (day == 4){
        res.send('thursday');
    }
    else if (day == 5){
        res.send('friday');
    }
    else if (day == 6){
        res.send('saturday');
    }
    res.send('Hello world');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});