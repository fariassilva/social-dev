import {signupUpser} from '../../../modules/user/user.service'

function signup (req,res){

  signupUpser()
  res.status(200).json({teste: "ok"})
}
export default signup