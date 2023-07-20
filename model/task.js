const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:[15,"cant be more than 15 letters"]
    },
    completed: {
        type: Boolean,
        default:false
      }
});

module.exports = mongoose.model('task', TaskSchema)