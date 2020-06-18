import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;

  position: relative;

  cursor: pointer;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${props =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  > img {
    width: 24px;
    height: 24px;
  }
  transition: border-radius 0.2s, background-color 0.2s;

  &::before {
    content: '';
    position: absolute;

    display: ${props => (props.hasNotification ? 'inline' : 'none')};

    width: 9px;
    height: 9px;
    border-radius: 50%;

    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
  }

  &::after {
  content: '${props => props.mentions && props.mentions}';
    position: absolute;
    
    display: ${props =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};

    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    bottom: -4px;
    right: -4px;
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${props =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
