const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User')

module.exports = ( passport ) => {

    passport.serializeUser(function (user, done) {
        done(null, user);
      });
    
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });
      
    
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL:'/auth/facebook/callback',
        profileFields: ['id','displayName','photos','emails'],
        scope:['email']
    }, function(accessToken, refreshToken, profile, done){
        console.log(profile);
        let userProfile = profile
        return done(null,userProfile)
    }))
    
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