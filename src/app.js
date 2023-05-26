
const express = require('express');
const mongoose = require('mongoose')
 require ("./db/conn");
 const Student = require("./models/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/api/registration", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
        res.send('Hello I\'m here hae');
    }).catch((e) => {
        res.status(400).send(e);
    })
    
});
/////////////
app.get('/api/students', async (req, res) => {
    try {
      // Fetch all users from the database
      const user = await Student.find();
      res.json(user);   
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/studentdetails/:id', (req, res) => {
    const id = req.params.id;
  
    Student.findById(id)
      .then((data) => {
        if (data) {
          res.json({message: 'data found',data});
          console.log(data);
        } else {
          res.status(404).json({ message: 'Data not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error retrieving data', error });
      });
  });

  app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
})