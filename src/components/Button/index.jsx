import React from 'react'
import { ButtonContainer } from './styles'

export const Button = ({ title, variant = 'primary', onClick, mb, mt }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} mb={mb} mt={mt}>
      {title}
    </ButtonContainer>
  )
}
