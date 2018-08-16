const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docSchema = new Schema({
  user : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
   docName:{
    type: String,
    required: [true, "Please input doc name"],
   },
   url:{
    type: String,
    required: [true, "Please input url"],
   },
   collaborators: [{
     type: Schema.Types.ObjectId,
     ref: 'User'
   }]
}, {timestamps: true})

const Doc = mongoose.model('Doc', docSchema);
module.exports = Doc;