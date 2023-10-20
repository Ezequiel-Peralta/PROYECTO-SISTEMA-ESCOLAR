const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('SchoolGrades', {
    idSchoolGrades:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
    grades: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
     
    },
    recovery:{
      type:  DataTypes.STRING,
      defaultValue:null
    },
    // finalGrades:{
    //   type: DataTypes.STRING,
    //   defaultValue:null
    // },
    nameSubject:{
      type:DataTypes.STRING
    }
  }, {
    timestamps: false,
  });
};
