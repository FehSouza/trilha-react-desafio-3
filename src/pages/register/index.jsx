import React, { useRef, useState } from 'react'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Button, Header, Input } from '../../components'
import { api } from '../../services/api'
import { Container, Content, Form, FormContainer, LinkContainer, Text, Title } from './styles'

const messageName = (name) => {
  if (!name) return 'Nome completo é obrigatório'
  if (name.length <= 2) return 'Digite um nome válido'
  return ''
}

const messageEmail = (email) => {
  if (!email) return 'E-mail é obrigatório'
  if (!email?.match(/^[^@]+@[^@]+\.[^@]+$/)) return 'Digite um e-mail válido'
  return ''
}

const messagePassword = (password) => {
  if (!password) return 'Password é obrigatório'
  if (password.length !== 6) return 'Digite um password de 6 dígitos'
  return ''
}

export const Register = () => {
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({})
  const [accountCreated, setAccountCreated] = useState(false)

  const inputRefName = useRef(null)
  const inputRefEmail = useRef(null)
  const inputRefPassword = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = messageName(values.name)
    const email = messageEmail(values.email)
    const password = messagePassword(values.password)

    setErrors((prev) => ({ ...prev, name }))
    setErrors((prev) => ({ ...prev, email }))
    setErrors((prev) => ({ ...prev, password }))

    if (!!name || !!email || !!password) return

    api
      .post('/users', { name: values.name, email: values.email, password: values.password })
      .then(function () {
        setAccountCreated(true)
      })
      .catch(function (error) {
        setAccountCreated(false)
        console.log(error)
      })
  }

  return (
    <Container>
      <Header />

      <Content>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>

        <FormContainer>
          {!accountCreated && <Title>Comece agora grátis</Title>}
          {!!accountCreated && <Title>{`Seja bem-vindo(a) a DIO ${inputRefName.current.value}!`}</Title>}

          {!accountCreated && <Text>Crie sua conta e make the change._</Text>}
          {!!accountCreated && <Text>Clique no botão abaixo para realizar login</Text>}

          {!accountCreated && (
            <Form onSubmit={handleSubmit}>
              <Input
                icon={<MdPerson size={18} />}
                placeholder="Nome completo"
                name="name"
                setValues={setValues}
                errors={errors}
                ref={inputRefName}
              />
              <Input
                icon={<MdEmail size={18} />}
                placeholder="E-mail"
                name="email"
                setValues={setValues}
                errors={errors}
                ref={inputRefEmail}
              />
              <Input
                icon={<MdLock size={18} />}
                placeholder="Password"
                name="password"
                type="password"
                setValues={setValues}
                errors={errors}
                ref={inputRefPassword}
              />

              <Button type="submit" title="Criar minha conta" variant="secondary" mb={24} mt={26} />

              <Text>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              </Text>
            </Form>
          )}

          <LinkContainer>
            Já tenho conta. <Link to="/login">Fazer login</Link>
          </LinkContainer>
        </FormContainer>
      </Content>
    </Container>
  )
}
