module.exports = (sequelize, DataTypes) => {
    const Ubication = sequelize.define(
      "Ubication",
      {
        id: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Ubicacion is missing",
            },
            notEmpty: {
              msg: "Ubicacion must not be empty",
            },
          },
          primaryKey: true,
        },
        latitud: {
          type: DataTypes.FLOAT(7,6),
          allowNull: false,
          validate: {
            notNull: {
              msg: "Latitud is missing",
            },
            notEmpty: {
              msg: "Latitud must not be empty",
            },
          },
        },
        longitud: {
            type: DataTypes.FLOAT(7,6),
            allowNull: false,
            validate: {
              notNull: {
                msg: "Longitud is missing",
              },
              notEmpty: {
                msg: "Longitud must not be empty",
              },
            },
          },
        direccion: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Direction is missing",
            },
            notEmpty: {
              msg: "Direction must not be empty",
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
        tableName: "UBICATION",
        underscored: false,
        name: {
          singular: "UBICATION",
          plural: "UBICATIONS",
        },
        sequelize,
      }
    );
    Ubication.associate=(models) => {
        Ubication.belongsTo(models.Loss_Record,{
            foreignKey: 'id',
            target:'id'
        })
    };
    return Ubication;
  };
  