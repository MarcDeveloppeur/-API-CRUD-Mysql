const express=require('express');
const bd=require('./models');
const app=express();
const messageRoute=require('./Router/messageRouter');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/',messageRoute);

bd.sequelize.sync().then(()=>{
  app.listen(3000,()=>console.log('Serveur démaré sur le port 3000'));
})
