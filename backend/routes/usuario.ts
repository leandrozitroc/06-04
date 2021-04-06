import * as express from 'express'
import {knex} from "../Database/AdminDb"

class Usuario{
    async getuser(req: any, res: any){
        const usuarios = await req.params.login
        console.log(usuarios)
        await knex
        .select()
        .from('tbl_usuario')
        .where({txt_email : usuarios}).then(result=>{
            console.log(result)
            res.json(result)
        }).catch(error=>{
            console.log(error)
            res.json({error:error})
        })

    }
}
export default new Usuario();