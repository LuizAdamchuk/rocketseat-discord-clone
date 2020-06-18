import React from 'react';

import { Container, Role, User, Avatar } from './style';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

export const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Visitante" />

      <Role>Offline - 17</Role>
      <UserRow nickname="Luiz Adamchuk" isBot />

      {Array.from(Array(16).keys()).map(n => (
        <UserRow nickname="Fulano" />
      ))}
    </Container>
  );
};
