const bd=require('../models');

exports.Ajouter=(req,res)=>{
  bd.Message.create({
    Message:req.body.Message
  })
  .then(()=>console.log('Enregistrement effectué'))
  .catch((err)=>console.log(err));
}
exports.LireTout=(req,res)=>{
  bd.Message.findAll()
  .then((resultat)=>res.json(resultat))
  .catch((err)=>console.log(err));
}
exports.LireUn=(req,res)=>{
  bd.Message.findAll({where:{id:req.params.id}})
  .then((reponse)=>res.json(reponse))
  .catch((err)=>console.log(err));
}
exports.Supprimer=(req,res)=>{
bd.Message.destroy({where:{id:req.params.id}})
.then(()=>console.log('Supprimé avec success'))
.catch((err)=>console.log(err));
}
exports.Update=(req,res)=>{
  bd.Message.update({
    Message:req.body.Message
  },{where:{id:req.params.id}})
  .then(()=>console.log('Mise a jours effectué'))
  .catch((err)=>console.log(err));
}
