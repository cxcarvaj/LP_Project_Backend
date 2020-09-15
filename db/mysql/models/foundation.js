module.exports = (sequelize, DataTypes) => {
    const Foundation = sequelize.define(
      "Foundation",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Name is missing",
              },
              notEmpty: {
                msg: "Name must not be empty",
              },
              not: {
                args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
                msg: "Name must only contain letters",
              },
            },
          },
          descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Descripcion is missing",
              },
              notEmpty: {
                msg: "Descripcion must not be empty",
              },
              not: {
                args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
                msg: "Descripcion must only contain letters",
              },
            },
          },
          telefono: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Telefono is missing",
              },
              notEmpty: {
                msg: "Telefono must not be empty",
              },
            },
          },
          ubicacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Ubicacion is missing",
              },
              notEmpty: {
                msg: "Ubicacion must not be empty",
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
        tableName: "FOUNDATION",
        underscored: false,
        name: {
          singular: "FOUNDATION",
          plural: "FOUNDATIONS",
        },
        sequelize,
      }
    );
    Foundation.associate=(models) => {
        Foundation.belongsTo(models.Ubication,{
            foreignKey:'ubicacion',
            target:'id'
        });
    };
    return Foundation;
  };