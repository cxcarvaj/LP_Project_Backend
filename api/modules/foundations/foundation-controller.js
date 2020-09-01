async function consult(req, res, next) {
    const foundations = await global.db.Foundation;
    return foundations
      .findAll({})
      .then((foundations) => res.status(200).send(foundations))
      .catch((error) => res.status(400).send(error));
  }
  async function publish(req, res, next) {
    // crear foundations
    const pet = await global.db.Foundation;
      return pet
      .create(req.body)
      .then((pet) => res.status(200).send(pet))
      .catch((error) => res.status(400).send(error));
    }

  async function update(req, res, next) {
    const {body} = req;
    return await global.db.Foundation
      .update(
        {...body},
        {
          //condition to identify our target user
          where: { id: body.id },
          returning: true, //needed for affectedRows to be populated
          plain: true,// makes sure that the returned instances are just plain objects
        })
      .then((body) => res.status(200).send(body))
      .catch((error) => res.status(400).send(error));
  }
  async function clean(req, res, next){
    const {body} = req;
    return await global.db.Foundation
      .destroy({
        where:{
          id: body.id,
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
  