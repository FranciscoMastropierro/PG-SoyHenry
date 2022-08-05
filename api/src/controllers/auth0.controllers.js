const { Users } = require('../db')



module.exports = {
    // authenthincateUser: async (req, res, next) => {
    //     // console.log('Flag App Auth0', req.oidc.isAuthenticated());
    //     // console.log('Flag app Auth0 USR', req.oidc.user);

    //     const user = req.oidc.user


    //     //    const admin = user.email === userAdminJSON.email ? true: false ---> Para generar administradores NOTA: Necesitamos un JSON con los email permitidos 
    //     if (req.oidc.isAuthenticated()) {
    //         Users.findOrCreate({
    //             where: {
    //                 firstname: user.given_name,
    //                 lastname: user.family_name,
    //                 username: user.nickname,
    //                 email: user.email,
    //                 profileImage: user.picture,
    //             },
    //         }).then(user => {
    //             const aux = user[0]
    //             res.send(aux)
    //         })
    //     } else {
    //         res.send(req.oidc.isAuthenticated());
    //     }
    // },



    infoProfile: async (req, res, next) => {
        const user = req.body;

        Users.findOne({where :{email:user.email}}).then(aux =>{
            console.log(aux)
            if(!aux){
                Users.create({
                            firstname: user.given_name,
                            lastname: user.family_name,
                            username: user.name,
                            email: user.email,
                            profileImage: user.picture.toString(),
                }).then(userCreate => res.send(userCreate))
            } else {
                if(aux.getDataValue('disable')) return res.status(401).send({msj : `User disable : ${user}`})
                return res.send(aux.dataValues)
            }}).catch(error => res.send(error))
        }
    
    
    
    // const user = req.body;
    // try {
    //     Users.findOrCreate({
    //                     where: {
    //                         firstname: user.given_name,
    //                         lastname: user.family_name,
    //                         username: user.nickname,
    //                         email: user.email,
    //                         profileImage: user.picture,
    //                     },
    //                 }).then(user => {
    //                     const aux = user[0]
    //                     if(aux.disable) res.status(401).send({msj : `User disable : ${aux}`})
    //                     res.send(aux)
    //                 })
    // } catch (error) {
        //     res.send(error)
        // }  


}