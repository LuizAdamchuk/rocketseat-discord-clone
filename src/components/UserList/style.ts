import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  background-color: var(--secondary);

  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;

  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;
export const User = styled.div`
  display: flex;
  margin-top: 4px;
  padding: 4px;
  border-radius: 4px;
  align-items: center;

  cursor: pointer;

  background: transparent;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  > strong {
    margin-left: 16px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    /* método sensacional para manter o texto organizado */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > span {
    margin-left: 8px;

    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 6px;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 11px;
  }
`;
export const Avatar = styled.div`
  /* evita que o avatar fique esmagado, mantem sempre a forma */
  flex-shrink: 0;

  height: 32px;
  width: 32px;

  border-radius: 50%;

  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
