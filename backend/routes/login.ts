import * as express from 'express'
import {knex} from "../Database/AdminDb"
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

const jwtSecret = 'LHJHE12435544gffgg'

function authorities1(acesso:number): string{
    if (acesso == 0) {
        return "ADMINISTRADOR"
    } else if (acesso == 2){
        return 'PROFISSIONAL'
    }else{
        return "CLIENTE"
    }
}

class Login{

   async trueLogin (req:any, res: any){
        const dadosLogin = await req.body;
        console.log(dadosLogin)
        const query1 = await knex.select()
       .table('tbl_usuario')
       .where({txt_email: dadosLogin.login})
      
       if(query1.length >0){
           const senhacorreta = bcrypt.compareSync(dadosLogin.senha,query1[0].txt_senha)
           const authorities2 =  await knex.select().from('tbl_usuario_permissao').where({usuario_id:query1[0].id_usuario})
           const authorities3 = await authorities1(authorities2[0].permissao_id).toLocaleLowerCase()
           
           
            if(senhacorreta){

                jwt.sign({txt_email: dadosLogin.txt_email}, jwtSecret, {expiresIn:'2h'}, (err,token)=>{
                    if(err){
                        
                        res.status(400)
                        res.json({error: "falha ao gerar Token"})   
                    }
                    
                    res.status(200)
                    
                    
                    res.json({token: token, login:query1[0].txt_email, authorities: authorities1(authorities2[0].permissao_id) ,
                         rota: `/${authorities3}`, message: 'Login Aceito'})
                })
                    
                
            } else {
                
                res.status(403)
                res.json({error: 'Senha Invalida'})
              
                
            }    

       } else {
           
           res.status(400)
           res.json({error:'Email Invalido'})
           
          
          
       }
           
     
           
   }       
     
}

export default new Login()