const routeNotFound = (req,res)=>{
    res.status(404).json("Not found");
}

module.exports = {routeNotFound};