import styled from 'styled-components';

import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;
  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;

  /* aqui ele vai colocar altura maxima 100vh menos 46 barra de cima e 68 barra de baixo */
  max-height: calc(100vh - 46px - 68px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;
export const InpurWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--chat-input);

  padding: 0 8px 0 56px;
  border-radius: 8px;

  color: var(--white);

  position: relative;

  &::placeholder {
    color: var(--gray);
    font-size: 15px;
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)`
  height: 24px;
  width: 24px;

  color: var(--gray);
`;
