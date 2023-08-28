const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('StaffTeacher', {
    
    idStaffTeacher:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
   nameStaff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastNameStaff:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dniStaff:{
        type: DataTypes.INTEGER,
      allowNull: false,
    },
    userStaff:{
        type: DataTypes.STRING,
      allowNull: true,
    },
    passwordStaff:{
        type: DataTypes.STRING,
      allowNull: true,
    },
    banned:{
      type: DataTypes.STRING,
      defaultValue: "active"
    }
    

 
  }, {
    timestamps: false,
  });
};
