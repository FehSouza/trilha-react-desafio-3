import React, { forwardRef } from 'react'
import { Container, Error, Icon, InputText, InputWrapper } from './styles'

export const Input = forwardRef(({ icon, placeholder, name, type = 'text', setValues, errors }, ref) => {
  const handleInput = (ref, name) => setValues((prev) => ({ ...prev, [name]: ref.current.value }))

  return (
    <Container>
      <InputWrapper>
        {!!icon && <Icon>{icon}</Icon>}
        <InputText placeholder={placeholder} name={name} type={type} ref={ref} onInput={() => handleInput(ref, name)} />
      </InputWrapper>

      {!!errors[name] && <Error>{errors[name]}</Error>}
    </Container>
  )
})

Input.displayName = 'Input'
