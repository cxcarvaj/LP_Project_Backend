const { Logform } = require("winston");

module.exports = (sequelize, DataTypes) => {
    const Need_Record = sequelize.define(
      "Need_Record",
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
        tipo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Type is missing",
            },
            notEmpty: {
              msg: "Type must not be empty",
            },
          },
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
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                msg: "Contact mail is missing",
                },
                notEmpty: {
                msg: "Contact mail must not be empty",
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
        tableName: "NEED_RECORD",
        underscored: false,
        name: {
          singular: "NEED_RECORD",
          plural: "NEED_RECORDS",
        },
        sequelize,
      }
    );
    Need_Record.associate=(models) => {
        Need_Record.belongsTo(models.User,{
            foreignKey:'username',
            target:'id'
        });
        Need_Record.belongsTo(models.Pet,{
            foreignKey:'mascota',
            target:'id'
        });
    };
    return Need_Record;
  };
  