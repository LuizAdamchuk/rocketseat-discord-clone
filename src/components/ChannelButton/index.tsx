import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './style';

interface Props {
  channelName: string;
  selected?: boolean;
}

export const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div id="rightSide">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};
