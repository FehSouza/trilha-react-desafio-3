import { Link } from 'react-router-dom'
import { Button, Header, Input } from '../../components'
import { Container, Content, Title, FormContainer, Text, LinkContainer, Form } from './styles'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from 'react-hook-form'

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onChange', mode: 'onChange' })

  return (
    <Container>
      <Header />

      <Content>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>

        <FormContainer>
          <Title>Comece agora grátis</Title>
          <Text>Crie sua conta e make the change.</Text>

          <Form>
            <Input placeholder="Nome completo" leftIcon={<MdPerson size={18} />} name="name" control={control} />
            <Input placeholder="E-mail" leftIcon={<MdEmail size={18} />} name="email" type="email" control={control} />
            <Input placeholder="Password" leftIcon={<MdLock size={18} />} name="password" type="password" control={control} />
            <Button title="Criar minha conta" variant="secondary" mb={24} mt={26} />
          </Form>

          <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
          <LinkContainer>
            Já tenho conta. <Link to="/login">Fazer login</Link>
          </LinkContainer>
        </FormContainer>
      </Content>
    </Container>
  )
}
