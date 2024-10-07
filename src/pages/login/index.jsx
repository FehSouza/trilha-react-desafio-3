import { useForm } from 'react-hook-form'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button, Header, InputDefault,  } from '../../components'
import { api } from '../../services/api'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

export const Login = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onChange', mode: 'onChange' })

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`)

      if (data.length && data[0].id) return navigate('/feed')

      alert('Usuário ou senha inválido')
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  }

  console.log('errors', errors)

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputDefault placeholder="E-mail" leftIcon={<MdEmail size={18} />} name="email" control={control} />
              {errors.email && <span>E-mail é obrigatório</span>}
              <InputDefault type="password" placeholder="Senha" leftIcon={<MdLock size={18} />} name="senha" control={control} />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText href="/register">Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
