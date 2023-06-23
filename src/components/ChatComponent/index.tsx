import React from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

interface props {
  messages:[];
  onMessageSend:(message:[])=>void;
}

const ChatComponent = ({
    messages,
    onMessageSend
}:props) => (
    <GiftedChat
      messages={messages}
      onSend={onMessageSend}
      user={{
        _id: 1,
        name: 'John Doe',
      }}
    />
);

export default ChatComponent;

