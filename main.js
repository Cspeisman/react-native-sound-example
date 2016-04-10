'use strict';

import Swiper from 'react-native-swiper'
import React, {Component, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';
var Orientation = require('react-native-orientation');

export default class MainView extends Component {
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


  componentDidMounut() {
    Orientation.lockToLandscape()
  }


  render() {
    const playSliders = this.state.files.map((value, index) => {
      return (
          <View style={styles.container} key={index}>
            <TouchableOpacity onPress={this.playSound.bind(this, index)}>
              <Text style={styles.button}>play</Text>
            </TouchableOpacity>
          </View>
        );
    });

    return (
      <Swiper showsButtons={true} showsPagination={false}>
        {playSliders}
      </Swiper>);
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
