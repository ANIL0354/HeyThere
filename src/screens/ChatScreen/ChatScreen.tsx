import React from 'react';
import { View, Text, Image,SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatComponent from '../../components/ChatComponent';
import styles from './styles';

const ChatScreen = (props:any) => {

  const {picture,name}=props?.route?.params  
  const [messages, setMessages] = React.useState([]);

  React.useEffect(()=>{
    props.navigation.setOptions({
      headerTitle: () => (
        <View
          style={styles.headerWrap}
        >
            <Image
              source={{uri:picture}}
              style={styles.headerUserImage}
            />
            <Text
              style={styles.headerTxt}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>
        </View>
      ),
    });
  },[])

  const handleSend = (newMessages:[]) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    // Call method to update user with new message
    // updateUserWithNewMessage(newMessages[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ChatComponent 
        messages={messages}
        onMessageSend ={handleSend}
        updateUserWithNewMessage={()=>{}} />
    </SafeAreaView>
  );
};

export default ChatScreen;