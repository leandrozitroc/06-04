import * as express from 'express'
import {knex} from "../Database/AdminDb"
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

const jwtSecret = 'LHJHE12435544gffgg'

class AdminLogin{

   async adminLogin (req:any, res: any){
        try {
            const dadosLogin = await req.body;
        
            const query1 = await knex.select()
            .table('admins')
            .where({email: dadosLogin.email})
            
            if(query1.length >0){
                const senhacorreta = bcrypt.compareSync(dadosLogin.password,query1[0].password)
                    
                    if(senhacorreta){

                        jwt.sign({email: dadosLogin.email}, jwtSecret, {expiresIn:'2h'}, (err,token)=>{
                            if(err){
                                
                                res.status(400)
                                res.json({error: "falha ao gerar Token"})
                            }
                            console.log('Login Aceito')
                            res.status(200)
                            
                        
                            res.json({admintoken: token})
                        })
                            
                        
                    } else {
                        console.log('Senha invalida')
                        res.status(403)
                        res.json({error: 'Senha Invalida'})
                    
                        
                    }    

            } else {
                console.log('Email invalido ou nao encontrado')
                res.status(400)
                res.json({error:'Email Invalido'})
                
                
                //res.redirect('/')
                
            }
                
            
            
        } catch(error){
            res.status(400)
            res.json({error: error})
        }      
    }
}

export default new AdminLogin()