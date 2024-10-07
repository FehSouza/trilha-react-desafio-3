import React from 'react'
import { Controller } from 'react-hook-form'
import { IconContainer, InputContainer, InputText } from './styles'

export const InputDefault = ({ leftIcon, name, control, ref, ...props }) => {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      {!!control && <Controller name={name} control={control} render={({ field }) => <InputText {...field} {...props} />} />}
      {!control && <InputText ref={ref} {...props} />}
    </InputContainer>
  )
}
