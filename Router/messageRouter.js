const express=require('express');
const router=express.Router();
const controllers=require('../controllers/MessageControllers');

router.post('/Ajouter',controllers.Ajouter);
router.get('/LireTout',controllers.LireTout);
router.get('/LireUn/:id',controllers.LireUn);
router.delete('/Supprimer/:id',controllers.Supprimer);
router.put('/Update/:id',controllers.Update);


module.exports=router;
