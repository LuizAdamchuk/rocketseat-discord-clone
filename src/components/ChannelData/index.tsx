import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
  createRef,
} from 'react';
import { format } from 'date-fns';

import { Container, Messages, InpurWrapper, Input, InputIcon } from './style';

import { ChannelMessage, Mention } from '../ChannelMessage';

interface MessageProps {
  message: string;
  date: string;
  length?: number;
}

export const ChannelData = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(
    String(format(new Date(), "dd'/'MM'/'yyyy")),
  );
  const [messageOnBoard, setMessageOnBoard] = useState<MessageProps[]>([]);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  const clearRef = createRef<HTMLInputElement>();

  const handleMessages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMessage(event.currentTarget.value);
      console.log(message);
    },
    [message],
  );
  const handleMessageHour = useCallback(
    (event: number) => {
      if (clearRef.current) {
        if (event === 13 && !!clearRef.current.value) {
          setDate(format(new Date(), "dd'/'MM'/'yyyy"));
          setMessageOnBoard([...messageOnBoard, { message, date }]);
          setMessage('');

          clearRef.current.value = '';
        }
      }
    },
    [clearRef, date, message, messageOnBoard],
  );

  return (
    <Container>
      <Messages ref={messagesRef}>
        {messageOnBoard.map(mess => (
          <ChannelMessage
            key={Number(mess.length)}
            author="Visitante"
            date={mess.date}
            content={mess.message}
          />
        ))}

        <ChannelMessage
          author="Luiz Adamchuk"
          date={format(new Date(), "dd'/'MM'/'yyyy")}
          content={
            <>
              Olá <Mention>@Visitante</Mention>, faça um teste você mesmo!!
              Escreva abaixo...
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InpurWrapper>
        <Input
          ref={clearRef}
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleMessages(event)
          }
          onKeyUp={(event: KeyboardEvent) => handleMessageHour(event.keyCode)}
          placeholder="Conversar em #chat-livre"
        />
        <InputIcon />
      </InpurWrapper>
    </Container>
  );
};
