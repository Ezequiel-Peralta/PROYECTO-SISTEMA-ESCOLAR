const { DataTypes } = require('sequelize');//importar Sequelize y luego  utilizar Sequelize.literal()
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo
  module.exports = (sequelize) => {
 const EscolarCycle= sequelize.define('EscolarCycle', {
    idEscolarCycle:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
    division: {
        type: DataTypes.ENUM("A","B","C","D","E"),
        allowNull: false,
    },
    course:{
        type: DataTypes.ENUM("1","2","3","4","5","6"),
        allowNull: false,
    },
    yearCycle: {
      type:DataTypes.DATEONLY,
      defaultValue: sequelize.fn('now'),
    },
  }, {
    timestamps: false,
  });
  }

