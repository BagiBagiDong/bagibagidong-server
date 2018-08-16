const Doc = require('../models/doc');
const loggedInUser = jwt.verify(req.body.token, process.env.tokenSecretKey)

const addDoc = (req, res)=> {
  const {docName, url, collaborators} = req.body

  Doc.create({
    user: loggedInUser._id,
    docName, 
    url, 
    collaborators
  })
  .then(createdDoc => {
    res.status(201).json({
      createdDoc, 
      message:'doc added'
    })
    .catch(err => {
      res.status(500).json({message: err});
    })
  })
}

const listAllDocs = (req, res) => {
  Doc.find({})
  .then(docs => {
    if(docs){
      res.status(200).json({docs, message: `here's your docs`})
    } else {
      res.status(200).json({message: `you haven't created any doc`})
    }
  })
  .catch(err =>{
    res.status(500).json({message: err});
  })
}

const updateDoc = (req, res) => {

  Doc.findByIdAndUpdate(req.params.id, req.body)
  .then(updatedDoc => {
    res.status(201).json({
      updatedDoc,
      message: 'doc updated'
    })
  })
  .catch(err=> {
    res.status(500).json({message: err});
  })
}

const deleteDoc = (req, res) => {
  Doc.findByIdAndDelete(req.params.id)
  .then(deletedDoc => {
    res.status(200).json({
      deletedDoc, 
      message: 'doc deleted'
    })
  })
  .catch(err => {
    res.status(500).json({message: err});
  })
}

module.exports = {
  addDoc,
  listAllDocs,
  updateDoc,
  deleteDoc
};