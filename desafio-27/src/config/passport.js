const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = ( passport ) => {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
      });
      
      passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });
      


    passport.use('signup',new LocalStrategy({
    },
        async (username,password,done) => {
            try{
                let user = await User.findOne({username: username})

                if (user) return done( null, false, console.log("message","User Already Exists"))
                
                user = await User.create({username: username, password:password})

                return done(null, user)
            }catch(err){
                done(err)
            }
        }
    )
    )

    passport.use('login',new LocalStrategy({
    },
        async (username,password,done) => {

            try{

                let user = await User.findOne({username: username})

                if(!user) return done( null, false, console.log("message","User doesn't exist"))

                if( !user.verifyPassword(password) ) return done(null,false, console.log("message","Password doesn't  match with the record")) 

                return done(null, user)
            }catch(err){
                done(err)
            }
        }
    )
    )
}