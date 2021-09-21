const isAuth = ( (req,res,next)=>{
    if(!req.isAuthenticated()) return res.redirect('/auth/login')
     next()
})

module.exports = { isAuth }