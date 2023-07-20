const Task = require('../model/task')

const getAllTask = async(req, res)=>{
    try {
        const tasks = await Task.find({Task})
        res.status(200).json({ tasks }); 
    } catch (error) {
        res.status(400).json({ error: 'Cant find any task' });  
    }

}
const createTask = async(req, res) => {
    try {
      let task = await Task.create(req.body);
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ msg:error });
    }
  };
const getSingleTask = async(req,res)=>{
    

  try {
const {id:taskID} = req.params;
   const task =  await Task.findOne({ _id:taskID })//_id is the id of tsk in db
   if (!task) {
    return res.status(404).json({ msg:`No task with id: ${taskID}` }); 
   }
   res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ error: 'Cant find any task with such id' });  
  }
}

const deleteTask = async(req,res)=>{
    
    try {
  const {id:taskID} = req.params;
     const task =  await Task.findOneAndDelete({ _id:taskID })//_id is the id of tsk in db
     if (!task) {
      return res.status(404).json({ msg:`No task with id: ${taskID}` }); 
     }
     res.status(200).json({ msg:`user with ${taskID} id deleted` });
    } catch (error) {
        res.status(400).json({ error: `Cant find any task with ${taskID}` });  
    }
  }

const updateSingleTask = async(req,res)=>{
    
    try {
        const {id:taskID} = req.params;
           const task =  await Task.findOneAndUpdate({ _id:taskID },req.body,{
            new:true,runValidators:true
           })//_id is the id of tsk in db:third paarameter is to get new updated info 
           if (!task) {
            return res.status(404).json({ msg:`No task with id: ${taskID}` }); 
           }
           res.status(200).json({task});
           console.log("Task updated")
          } catch (error) {
              res.status(400).json({ error: `Cant find any task with ${taskID} to update` });  
          }
}


module.exports = {getAllTask,getSingleTask,createTask,deleteTask,updateSingleTask}