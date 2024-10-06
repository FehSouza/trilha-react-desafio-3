import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  min-width: 120px;
  width: 100%;
  min-height: 29px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  padding: 0;
  background-color: #565656;
  border: none;
  border-radius: 27px;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  position: relative;
  transition-duration: 350ms;

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      min-width: 167px;
      max-width: calc(100% - 16px);
      margin-left: 8px;
      margin-top: ${({ mt }) => (mt ? `${mt}px` : '46px')};
      background-color: #e4105d;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      &::after {
        content: '';
        width: calc(100% + 15px);
        height: calc(100% + 11px);
        border: 1px solid #e4105d;
        border-radius: 27px;
        position: absolute;
        top: -6px;
        left: -8px;
      }
    `}
`
