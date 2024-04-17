const express = require('express');
const cors = require('cors'); 
const router = express.Router();


const app = express();
const port = 5174; // Or choose your desired port
app.use(cors()); // Apply CORS middleware 

app.get('/api/', (req, res) => {
    res.statusCode=200;
    res.send("correcto!");
  });


// Mount your routes
app.use(router); 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


module.exports = router; 
