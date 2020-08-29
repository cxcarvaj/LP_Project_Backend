module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define(
      "Pet",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
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
          especie: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Especie is missing",
              },
              notEmpty: {
                msg: "Especie must not be empty",
              },
              not: {
                args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
                msg: "Especie must only contain letters",
              },
            },
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Gender is missing",
              },
              notEmpty: {
                msg: "Gender must not be empty",
              },
              isIn: {
                args: [["Male","Female"]],
                msg: "Gender not allowed",
              },
            },
          },
          edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Age is missing",
              },
              notEmpty: {
                msg: "Age must not be empty",
              },
            },
          },
          caracteristica: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: "Caracteristica is missing",
              },
              notEmpty: {
                msg: "Caracteristica must not be empty",
              },
            },
          },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Estado de la mascota is missing",
            },
            notEmpty: {
              msg: "Estado de la mascota must not be empty",
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
        tableName: "PET",
        underscored: false,
        name: {
          singular: "PET",
          plural: "PETS",
        },
        sequelize,
      }
    );
    Pet.associate=(models) => {
    };
    return Pet;
  };
  