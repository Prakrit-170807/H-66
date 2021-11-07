import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image , Alert} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    this.state.name==''
      ? 
      (Alert.alert("Please Enter a word"))
      : 
      (Speech.speak(thingToSay))
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.textContainer1}>
          <Header
            backgroundColor={'#679ea2'}
            leftComponent={{
              text: 'Text To Speech Converter  ⦍⦎',
              style: { flex: 0, color: '#d2d0be', fontSize: 29, fontWeight: "bold", marginRight: -380, },
            }}
          />

          <Image
            style={styles.imageIcon}
            source={
              require("./texttospeechicon.png")
            }
          />

          <Text style={styles.text2}> Enter A Word </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            value={this.state.name}
          />

          <View>
            <TouchableOpacity style={styles.button} onPress={this.speak}>
              <Text style={styles.text3}>Dictate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    marginLeft: -4,
    width: '102%',
    height: 40,
    borderWidth: 4,
    borderColor: "#517aa3",
    color: "#d2d0be"
  },

  textContainer1: {
    backgroundColor: '#191018',
    flex: 1,
  },

  text2: {
    color: '#d2d0be',
    marginTop: -30,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text3: {
    color: '#d2d0be',
    marginTop: -5,
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 30,
    backgroundColor: '#679ea2',
    marginTop: 30,
    width: '100%',
    height: 80,
  },
  imageIcon: {
    width: 215,
    height: 250,
    marginLeft: 3,
  },
});
