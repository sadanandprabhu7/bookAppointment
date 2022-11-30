const Appointment = require('../model/main')

exports.addingDetails= async (req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
   const data = await Appointment.create({name:name,email:email,phone:phone,})
    res.status(201).json({newUserDetails:data})
  
}

exports.showUsers=(res,req,next)=>{
    Appointment.findAll().then(data =>{
        req.json({newUserDetails:data})
       
    })
}


exports.deleteUsers=(req,res,next)=>{
    const prodId = req.params.id;
    Appointment.findByPk(prodId)
    .then((product)=>{
          return product.destroy();
     
    })
    .then(()=>{
      console.log('product destroyed')
     
    })
    .catch((err)=>{
      console.log(err)
    }); 
}
