import styled from "styled-components"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/tipografia/H1"
import H2 from "../src/components/tipografia/H2"
import H4 from "../src/components/tipografia/H4"

const FormContainer = styled.div `
margin-top: 60px;

`
const Form= styled.form`
display: flex;
flex-direction: column;
margin: 20px 0;
gap: 20px;

`
const Text = styled.p`

text-align: center;


`

function LoginPage (){

  return(

    <ImageWithSpace>
      <H1>#SocialDev</H1>
      <H4>todo que acontece no mundo dev,está aqui</H4>
      <FormContainer>
        <H2>entre em sua conta</H2>
        <Form>
          <input placeholder="email ou usuario"type="email" />
          <input placeholder="senha "type="password" />
          <button>entrar</button>
        </Form>
        <Text>
          não possui uma conta? <a href="https://campinagrande.pb.gov.br/"> faça seu cadastro</a>
        </Text>
      </FormContainer>
    </ImageWithSpace>

  )
}
export default LoginPage