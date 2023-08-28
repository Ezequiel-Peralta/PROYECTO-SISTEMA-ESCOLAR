const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Attendance', {
    idAttendance:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
    present: {
      type: DataTypes.BOOLEAN,
      
    },
    absent:{
      type: DataTypes.BOOLEAN,
      
    }
  }, {
    timestamps: false,
  });
};
