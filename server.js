const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const port = 4500;

const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());

app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');

    const response = await axios.post(
      'https://vision.googleapis.com/v1/images:annotate',
      {
        requests: [
          {
            image: {
              content: base64Image
            },
            features: [
              {
                type: 'TEXT_DETECTION'
              }
            ]
          }
        ]
      },
      {
        params: {
          key: 'AIzaSyCLRTvUD4O7KEp_bNLoigu7fsDOCQUkXZk'
        }
      }
    );

    const textAnnotations = response.data.responses[0].textAnnotations;
    const extractedText = textAnnotations[0].description;
    
    // Spawn a new Python process to run the ML model
    const pythonProcess = spawn('python', ['./ml_model.py', extractedText]);

    let medicineName = '';
    let composition = '';

    // Listen for stdout data from the Python process
    pythonProcess.stdout.on('data', (data) => {
      const output = data.toString().trim().split('|');
      medicineName = output[0];
      composition = output[1];
      uses = output[2];
      side_effects = output[3];
      manufacturer=output[4];
      // Send response inside the stdout event listener
      res.json({ medicineName, composition,uses,side_effects,manufacturer});
    });

    // Listen for stderr data from the Python process
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Error executing ML model: ${data}`);
      res.status(500).json({ error: 'An error occurred while processing the image.' });
    });

  } catch (error) {
    console.error('Error performing text detection:', error);
    res.status(500).json({ error: 'An error occurred while processing the image.' });
  }
});


// FORM DATA


const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Medigen');

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(Medigen_Users => res.json(Medigen_Users))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(port, () => {

    console.log("Server listining on http://127.0.0.1:4500");

});