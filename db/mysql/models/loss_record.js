const { Logform } = require("winston");

module.exports = (sequelize, DataTypes) => {
    const Loss_Record = sequelize.define(
      "Loss_Record",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "username is missing",
            },
            notEmpty: {
              msg: "username must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Name must only contain letters",
            },
          },
        },
        mascota: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ubicacion: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        telefono: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Cellphone is missing",
            },
            notEmpty: {
              msg: "Cellphone must not be empty",
            },
          },
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Contact name is missing",
              },
              notEmpty: {
                msg: "Contact name must not be empty",
              },
            },
          },
        state: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          validate: {
            notNull: {
              msg: "state is missing",
            },
            notEmpty: {
              msg: "state must not be empty",
            },
            isIn: {
              args: [[true, false]],
              msg: "state not allowed",
            },
          },
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "LOSS_RECORD",
        underscored: false,
        name: {
          singular: "LOSS_RECORD",
          plural: "LOSS_RECORDS",
        },
        sequelize,
      }
    );
    Loss_Record.associate=(models) => {
        Loss_Record.belongsTo(models.User,{
            foreignKey:'username',
            target:'id'
        });
        Loss_Record.belongsTo(models.Pet,{
            foreignKey:'username',
            target:'id'
        });
    };
    return Loss_Record;
  };
  