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



module.exports = {
  addDoc,
  listAllDocs,
  updateDoc,
  deleteDoc
};