import React from 'react';

import { Container, Separator } from './style';

import { ServerButton } from '../ServerButton';

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={7} />
      <ServerButton />
    </Container>
  );
};
