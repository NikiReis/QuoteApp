import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import quotes from './quotes.json';

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(randomQuote());

  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function CliqueBotao() {
    setCurrentQuote(randomQuote());
  }
  function AboutUs() {
    return (
      Alert.alert(
        'Bem-vindo ao QuotesApp!',
        'Aqui, você encontrará inspiração a qualquer momento. O objetivo deste aplicativo é motivar e inspirar seus usuários por meio de citações de pessoas famosas. Sinta-se inspirado por grandes nomes do esporte, ciência, arte e muito mais. Descubra uma nova mensagem com apenas um clique e deixe essas palavras te motivarem a alcançar novos objetivos todos os dias! E lembre-se, nunca desista!',
      )
    )
  }

  return (
    <View style={{backgroundColor: "white", flex:1}}>
      <View style={style_header.app_name}>
        <Text style={style_header.text_container}>
          <Image
            source={require("./assets/3057671_media_quote_social_icon.png")}
            style={{width: 37, height: 32, marginRight: 10}}/> Quotes App
      </Text>
      </View>

      <View style={style_quote.image}>
        <Image
          source={{uri: currentQuote.image}}
          style={{width: 320, height: 320, borderRadius: 160}}
        />

        <View style={[style_quote.message]}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: "bold"}}>
            - {currentQuote.author}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            "{currentQuote.quote}"
          </Text>
          <Text style={{color: 'black', fontSize: 18, marginTop: 10}}>
            {currentQuote.description}
          </Text>
        </View>
      </View>

      <View style={style_button.container}>
        <TouchableOpacity
          style={style_button.button}
          onPress={() => CliqueBotao()}>
          <Text style={style_button.text}>Find Motivation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style_button.button} onPress={() => AboutUs()}>
          <Text style={style_button.text}>More About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style_quote = StyleSheet.create({
  image: {
    alignItems: 'flex-start',
    top: 85,
    position: 'absolute',
    marginLeft: 20,
  },
  message: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
  },
});

const style_header = StyleSheet.create({
  app_name: {
    backgroundColor: 'black',
    height: 50,
  },
  text_container: {
    alignItems: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
    paddingTop:2,
  },
});

const style_button = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
