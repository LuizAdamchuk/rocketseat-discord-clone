import React from 'react';

import { Container, Category, AddCategoryIcon } from './style';
import { ChannelButton } from '../ChannelButton';

export const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="corrida" />
      <ChannelButton channelName="programação" />
    </Container>
  );
};
