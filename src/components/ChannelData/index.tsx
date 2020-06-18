import React, { useRef, useEffect } from 'react';

import { Container, Messages, InpurWrapper, Input, InputIcon } from './style';

import { ChannelMessage, Mention } from '../ChannelMessage';

export const ChannelData = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Luiz Adamchuk"
            date="18/06/2020"
            content="Mensagem de teste"
          />
        ))}

        <ChannelMessage
          author="Luiz Adamchuk"
          date="18/06/2020"
          content="Mensagem de teste"
        />
        <ChannelMessage
          author="Luiz Adamchuk"
          date="18/06/2020"
          content={
            <>
              <Mention>@Luiz Adamchuk</Mention>, testando mensagem
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InpurWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InpurWrapper>
    </Container>
  );
};
