import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Link } from '../Link'
import { BuscarInputContainer, Container, Input, LinkHome, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles'

export const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <LinkHome href="/">
            <img src={logo} alt="Logo da dio" />
          </LinkHome>

          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>

        <Row>
          {autenticado && <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />}

          {!autenticado && (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Link title="Entrar" href="/login" />
              <Link title="Cadastrar" href="/register" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
