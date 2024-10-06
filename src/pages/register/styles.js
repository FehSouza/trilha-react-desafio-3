import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  gap: 295px;
  flex: 1;
  margin: 0 auto;
  padding-top: 88px;

  @media (max-width: 1280px) {
    gap: 160px;
  }

  @media (max-width: 1024px) {
    gap: 88px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
    padding-top: 60px;
  }
`

export const Title = styled.p`
  font-family: 'Open Sans';
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  height: min-content;

  @media (max-width: 1280px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`

export const Text = styled.p`
  margin-top: 8px;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  height: min-content;
`

export const FormContainer = styled.div`
  min-width: 374px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const Form = styled.form`
  max-width: 280px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`

export const LinkContainer = styled.span`
  display: block;
  margin-top: 11px;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  color: #ffffff;

  a {
    text-decoration: none;
    color: #23dd7a;
  }
`
