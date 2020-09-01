async function consult(req, res, next) {
    const need_records = await global.db.Need_Record;
    return need_records
      .findAll({})
      .then((need_records) => res.status(200).send(need_records))
      .catch((error) => res.status(400).send(error));
  }
  async function publish(req, res, next) {
    // crear reporte de perdido
    const need_record = await global.db.Need_Record;
      return need_record
      .create(req.body)
      .then((need_record) => res.status(200).send(need_record))
      .catch((error) => res.status(400).send(error));
    }

  async function update(req, res, next) {
    const {body} = req;
    return await global.db.Need_Record
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
    return await global.db.Need_Record
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
  