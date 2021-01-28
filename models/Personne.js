module.exports=(sequelize,datatypes)=>{
  const Message=sequelize.define('Message',{
    Message:{type:datatypes.TEXT}
  });
  return Message;
}
