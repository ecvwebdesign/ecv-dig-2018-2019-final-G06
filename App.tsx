/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ViewPager from './src/pager/Pager';


export interface State {
  onDoneBoarding?: boolean;
}

type Props = {};
export default class App extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      onDoneBoarding: false
    };
  }


  render() {
    return (
      <View style={styles.container}>

        <ViewPager/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%",
  },
});
