import * as jwt from 'jsonwebtoken'
const jwtSecret = 'LHJHE12435544gffgg'
class AuthJw{
    
    async middle(req:any, res:any, next){

    
        const authToken = req.headers['authorization']

        if (authToken != undefined){
            const bearer = authToken.split(' ')
            const token = bearer[1]
            const decoded = jwt.verify(token,jwtSecret)
            next()

        } else {
            res.status(403).json({Error: 'Não autenticado'})
            return
        }
    }

}

export default new AuthJw()