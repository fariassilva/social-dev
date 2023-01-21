import {signupUpser} from '../../../modules/user/user.service'
import Joi from 'joi'

import validate from '../../lib/middlewares/validate'

import { signupUpser } from '../../../modules/user/user.service'

const postSchema = Joi.object({

  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(50),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6),
})

const signup = connect()
  .post(validate({bady: postSchema}), (req,res) =>{
   

    signupUpser(req.body)
  res.status(200).json({teste: "ok"})


  })
 export default signup



  
