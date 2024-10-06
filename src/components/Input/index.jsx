import React from 'react'
import { Controller } from 'react-hook-form'
import { IconContainer, InputContainer, InputText } from './styles'

export const Input = ({ leftIcon, name, control, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Controller name={name} control={control} render={({ field }) => <InputText {...field} {...rest} />} />
    </InputContainer>
  )
}
