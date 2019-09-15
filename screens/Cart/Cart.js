import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import {cartvalues,setcart} from '../../global'



export default class App extends Component {
  render() {
    return (
      <View >
        <Text>{'Quantity in cart = '+ cartvalues }</Text>
      </View>
    );
  }
}
