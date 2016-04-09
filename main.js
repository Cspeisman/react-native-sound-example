'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
var Sound = require('react-native-sound');

class MainView extends Component {
  constructor() {
    super();

    // creates an array for sound objects
    const files = new Array(8).fill(undefined).map((value, index) => {
      return new Sound(`MIX_${index + 1}.mp3`, Sound.MAIN_BUNDLE, (e) => {
        if (e) console.log('error', e);
      });
    });

    this.state = {files: files}
  }


  render() {
    const playSliders = this.state.files.map((value, index) => {
      return (
        <TouchableOpacity key={index} onPress={this.playSound.bind(this, index)}>
          <Text style={styles.button}>play</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.container}>
        {playSliders}
      </View>);
  }

  playSound(index) {
    // creates new date object
    const date = new Date();

    // calculates how many milliseconds till the 0 millisecond of the next second
    let milliseconds = 1000 - date.getMilliseconds();

    setTimeout(() => {
      this.state.files[index]
        .setCurrentTime(date.getSeconds())
        .setNumberOfLoops(-1)
        .play()
      }, milliseconds)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
    margin: 10,
  },
});

export default MainView;
