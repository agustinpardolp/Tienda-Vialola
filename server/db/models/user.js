const sequelize = require ("sequelize");
const db = require ("../index")
const crypto = require("crypto");

const User = db.define("user",{

    name:{
        type: sequelize.STRING,
        allownull:false,
        validate:{
            isAlpha:true
        }
    },
    surname:{
        type: sequelize.STRING,
        allownull:false,
        validate:{
            isAlpha:true
        }
    },
    adress:{
        type: sequelize.STRING,
        allownull:false
    },
    cuit:{
        type: sequelize.BIGINT,
        set(cuit){
            if (isNaN(cuit)) {
                var newcuit = cuit.replace(/[-_]/g,"")
                this.setDataValue("cuit", parseInt(newcuit))
            }else{
                this.setDataValue("cuit", cuit)
            }
        },
        allownull:false,
        validate:{
            isNumeric:true
        }
    },
    isAdmin:{
      type: sequelize.BOOLEAN,
      allownull:false,
      defaultValue:false
    },

    email:{
        type:sequelize.STRING,
        validate:{
          isAlpha:true
      }
    },
    avatar:{
        type: sequelize.STRING,
        defaultValue: "avatar.jpg"
    },
    password: {
        type: sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      passwordConfirmed: {
        type: sequelize.BOOLEAN
      },
      salt: {
        type: sequelize.STRING
      },
})

User.generateSalt = function() {
    return crypto.randomBytes(20).toString("hex");
  };
  
  User.prototype.encryptPassword = function(password) {
    return crypto
      .createHmac("sha1", this.salt)
      .update(password)
      .digest("hex");
  };
  User.prototype.validatePassword = function(password) {
    const hash = crypto
      .createHmac("sha1", this.salt)
      .update(password)
      .digest("hex");
  
    return this.password === hash;
  };
  User.prototype.updatePassword = function(password, newPassword) {
    //creo un nuevo meodo de instancia, para el empleado que esto queriendo actualizar
  
    if (password) {
      var oldPass = crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");   // si el cambio se hace teniendo password vieja
  
      if (oldPass == this.password) {
        var newPass = crypto
          .createHmac("sha1", this.salt)
          .update(newPassword)
          .digest("hex");
        User.update(
          { password: newPass, passwordChanged: true }, // el update lo realizo aca, no en la ruta.
          { where: { id: this.id } } //
        );
        return "ok";
      }else{
        return "error"
      }
    }
  }
  
  User.addHook("beforeCreate", user => {
    user.salt = User.generateSalt();
    user.password = user.encryptPassword(user.password);
  });
  
  module.exports = User;