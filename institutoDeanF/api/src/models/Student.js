const { DataTypes } = require('sequelize');
const EscolarCycle = require("./EscolarCycle")
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Student', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
       allowNull: false,
    },
    dni:{
      type: DataTypes.INTEGER,
      allowNull: false,
      //primaryKey:true,
    },
    birthDate: {
      type: DataTypes.STRING,
       //allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      //allowNull: false,
    },
    imageURL:{
     
        type:DataTypes.STRING,
        //allowNull: false,
      
    }
  }, {
    timestamps: false,
  });
  
  

};
