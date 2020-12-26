var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

mongoose.connect('mongodb://localhost:27017/nodeangular', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    mobile: Number,
    email: String,
    password: String,
    dob:String,
    state:String,
    city:String,
    pincode:Number
  });

const userModel = mongoose.model('users', userSchema);
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());


app.get("/fetch_data" , (req,res)=>{
    userModel.find({} , function(err,docs){
        if(!err){
            res.send(docs);

        }
    })

});

app.get("/get_values_by_id/:myid", (req,res)=>{
  let urlid=req.params['myid'];
  userModel.find({_id:urlid}, function(err,docs){
    if(!err){
      res.send(docs);
    }
  })
});

app.post("/post_data" , (req,res)=>{
  //console.log(req.body)
  let instance_user=new userModel(req.body);
  instance_user.save(function(err){
    if(!err){
      res.send({msg:"Record added in dbs"});
    }
  })
});
app.delete("/delete_data/:id_from_ang", (req,res)=>{
  //console.log(req.body);
  console.log(req.params);
  userModel.remove({_id:req.params['id_from_ang']}, function(err){
    if(!err){
  res.send({msg:"Record Deleted"});
    }
})
});
app.put("/update-values/:id_from_ang", (req,res)=>{
  // console.log(req.body);
  // console.log(req.params);
  // res.send({msg:"royl"})
  userModel.update({_id:req.params['id_from_ang']},{$set:req.body}, function(err){
  if(!err){
  res.send({msg:"Update Done"});
}
});
})


app.listen(4000);