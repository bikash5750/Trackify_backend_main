import mongoose from "mongoose";


const categoriesschema  = new mongoose.Schema({
  name :{
    type : String,
    trim : true,
    require : true,
  } ,
 
  categoriesitem : [{
    type : mongoose.Types.ObjectId,
    ref : "expense",
  }]
},

  {timestamps:true})

 export const Category = mongoose.model("Category", categoriesschema);

