const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/User')

const FACEBOOK_CLIENT_ID = process.argv[3] || process.env.FACEBOOK_CLIENT_ID
const FACEBOOK_CLIENT_SECRET = process.argv[4] || process.env.FACEBOOK_CLIENT_SECRET

console.log('Using Facebook_Client_Id: ', FACEBOOK_CLIENT_ID )
console.log('Using Facebook_Client_Secret: ', FACEBOOK_CLIENT_SECRET )

module.exports = ( passport ) => {

    passport.serializeUser(function (user, done) {
        done(null, user);
      });
    
    passport.deserializeUser(function (user, done) {
        done(null, user);
      });
      
    
    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL:'/auth/facebook/callback',
        profileFields: ['id','displayName','photos','emails'],
        scope:['email']

    }, function(accessToken, refreshToken, profile, done){
        let user = {
            fullName: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value
        }
        console.log(user);
        return done(null,user)
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