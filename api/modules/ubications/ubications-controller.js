async function consult(req, res, next) {
    const ubications = await global.db.Ubication;
    return ubications
      .findAll({})
      .then((ubication) => res.status(200).send(ubication))
      .catch((error) => res.status(400).send(error));
  }
  async function consultByID(req, res, next) {
    const ubications = await global.db.Ubication;
    const {params}=req;
    return ubications
      .findOne({ where: {id: params.id}})
      .then((ubication) => res.status(200).send(ubication))
      .catch((error) => res.status(400).send(error));
  }
  async function publish(req, res, next) {
    // crear ubicacion
    const ubication = await global.db.Ubication;
      return ubication
      .create(req.body)
      .then((ubication) => res.status(200).send(ubication))
      .catch((error) => res.status(400).send(error));
    }

  async function update(req, res, next) {
    const {body} = req;
    return await global.db.Ubication
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
    return await global.db.Ubication
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
    consultByID,
    publish,
    update,
    clean,
  };
  