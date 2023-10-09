const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Teachers', {
    
    idTeachers:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
   nameTeachers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastNameTeachers:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dniTeachers:{
        type: DataTypes.INTEGER,
      allowNull: false,
    }

 
  }, {
    timestamps: false,
  });
};
