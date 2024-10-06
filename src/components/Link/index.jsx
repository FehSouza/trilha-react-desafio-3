import React from 'react'
import { Container } from './styles'

export const Link = ({ title, href }) => {
  return <Container href={href}>{title}</Container>
}
