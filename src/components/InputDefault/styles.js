import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 280px;
  height: 29px;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`

export const IconContainer = styled.div`
  margin-right: 10px;

  svg {
    fill: #8647ad;
    min-width: 16px;
  }
`

export const InputText = styled.input`
  background-color: transparent;
  outline: none;
  color: #ffffff;
  flex: 1;
  border: 0;
  height: 29px;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #1e192c inset;
    -webkit-text-fill-color: #ffffff;
  }
`
