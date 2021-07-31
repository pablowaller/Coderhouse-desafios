const isAuth = ( (req,res,next)=>{
    //const isLogged =  Boolean(req.user)
    if(!req.isAuthenticated()) return res.redirect('/auth/login')
     next()
})

module.exports = { isAuth }