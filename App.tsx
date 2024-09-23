import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, { useState } from 'react';


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
  
  return (
    
    <View>
      <View style={style_header.app_name}>
        <Text style={style_header.text_container}>Quotes App</Text>
      </View>

      <View style={style_description.app_description}>
        <Text style={style_description.text}>Bem-vindo ao QuotesApp! Aqui, você encontrará inspiração a qualquer momento. Com apenas um clique de botão você receberá uma grandes frases motivacionais e inspiradores de grandes pessoas de sucessos. Sinta-se inspirado por grandes nomes do esporte, ciência, arte e muito mais. Descubra uma nova mensagem cada vez que tocar e deixe essas palavras te motivarem a alcançar novos objetivos todos os dias! E lembrese, nunca desista!</Text>
      </View>

      <View style={style_quote.image}>
        <Image 
          source={{uri: currentQuote.image}}
          style={{width: 370, height: 350, borderRadius: 10}}
        />

        <View style={[style_quote.message]}>
          <Text style={{color: "black", fontSize: 15}}>"{currentQuote.quote}"</Text>
          <Text style={{color: "black", fontSize: 15}}>- {currentQuote.author}</Text>
        </View>
      </View>
      <View style={style_button.button}>
          <Button
            title="Encontre Motivação"
            color="blue"
            onPress={() => CliqueBotao()}
          />
      </View>
    </View>
  
  )
}

const style_quote = StyleSheet.create({
  image:{
    alignItems: 'flex-start',
    marginTop: 35,
    marginLeft: 20,
  },
  message:{
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
  },

});

const style_header = StyleSheet.create({
  app_name: {
    backgroundColor: 'gray',
    },
  text_container:{
    alignItems: 'center',
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
  },
});

const style_description = StyleSheet.create({
  app_description: {
    alignItems: 'center',
    color: 'black',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginLeft: 20,
    marginRight: 12,
  }
});

const style_button = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    color: 'black',
  }
});