const {UserModel}=require("../model/userModel")
const adduser=async(req,res)=>{
    try{
      const {name,email,phoneNumber,role}=req.body;
      const isUserPresent= await UserModel.find(email)
       if(isUserPresent) return res.status(200).json("User Already registed")
  
    const userr=new UserModel(req.body)
  await  userr.save()
  res.status(200).json({"user":userr})
    }catch(err){
        res.status(501).json(err.message)
    }
}

module.exports={
    adduser
}