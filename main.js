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
    this.s = new Sound('Drum1.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', this.s.getDuration());
      }
    });
  }
  render() {
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound.bind(this)}>
               <Text style={styles.button}>play</Text>
             </TouchableOpacity>
           </View>;
  }

  playSound() {
    this.s.play()
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
  },
});

export default MainView;
