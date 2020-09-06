async function consult(req, res, next) {
    const pets = await global.db.Pet;
    return pets
      .findAll({})
      .then((pets) => res.status(200).send(pets))
      .catch((error) => res.status(400).send(error));
  }
  async function consultByID(req, res, next) {
    const pets = await global.db.Pet;
    const {params}=req;
    return pets
      .findOne({ where: {id: params.id}})
      .then((pets) => res.status(200).send(pets))
      .catch((error) => res.status(400).send(error));
  }
  async function publish(req, res, next) {
    // crear pets
    const pet = await global.db.Pet;
      return pet
      .create(req.body)
      .then((pet) => res.status(200).send(pet))
      .catch((error) => res.status(400).send(error));
    }

  async function update(req, res, next) {
    const {body} = req;
    return await global.db.Pet
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
    return await global.db.Pet
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
  