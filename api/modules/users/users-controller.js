async function consult(req, res, next) {
  const users = await global.db.User;
  return users
    .findAll({})
    .then((users) => res.status(200).send(users))
    .catch((error) => res.status(400).send(error));
}
async function publish(req, res, next) {
  // crear user
  const user = await global.db.User;
  const userRegister = await user.findAll({where:{username: req.body.username}})
  if(Object.keys(userRegister).length===0){
    return user
    .create(req.body)
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(error));
  }else{
    return res.status(409).send("Username ya registrado en la base de datos, por favor intente con otro!");
  }
}
async function update(req, res, next) {
  const {body} = req;
  return await global.db.User
    .update(
      {...body},
      {
        //condition to identify our target user
        where: { username: body.username },
        returning: true, //needed for affectedRows to be populated
        plain: true,// makes sure that the returned instances are just plain objects
      })
    .then((body) => res.status(200).send(body))
    .catch((error) => res.status(400).send(error));
}
async function clean(req, res, next){
  const {body} = req;
  return await global.db.User
    .destroy({
      where:{
        username: body.username,
      }
    })
    .then((body) => res.sendStatus(200).send(body))
    .catch((error) => res.sendStatus(400).send(error));

}
module.exports = {
  consult,
  publish,
  update,
  clean,
};
