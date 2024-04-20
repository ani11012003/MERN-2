const Poem=require("../models/poem-model");
const PoemForm=async(req,res) => {
try {
    const response=req.body;
    await Poem.create(response);
    return res.status(200).json({message:"Message send successfully"});
} catch (error) {
    return res.status(500).json({message:"Message not delivered"});
}
}
module.exports=PoemForm;