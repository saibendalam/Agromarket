import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigation, TabButton, TabIcons } from '@opengeekslab/react-native-tab-navigator';

import Screen1 from './screens/Profile/profile';
import Screen2 from './Veggies';
import Home from './Veggies';
import Screen4 from './Veggies';
import Screen5 from './screens/Cart/Cart';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNav />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
const navigationRouter = {
  User: {
    screen: Screen1,
    screenOptions: {
      title: 'PROFILE',
      showTitle: true,
      animated: true,
      tabIcon:require('./images/user.png'),
      animation: [
        {
          name: 'rotationY',
          type: 'bouncing',
        },

      ],
      textStyle:
      [
        { paddingTop:5,
          fontSize:14 
      }
     ],
     iconStyle:
     [
       {
       height:28,
       width:28
       }
    ],
    },
  },

  Screen_3: {
    screen: Home,
    screenOptions: {
      title: 'VEGGIES',
      tabIcon:require('./images/vegetables.png'),
      animated: true,
      animation: [
        {
          name: 'pendulum',
          duration: 700,
        },
      ],
      textStyle:
      [
        { paddingTop:5,
          fontSize:14
      }
     ],
     iconStyle:
     [
       {
       height:28,
       width:28
       }
    ],
    },
  },
  
  Screen_5: {
    screen: Screen5,
    screenOptions: {
      title: 'CART',
      tabIcon: require('./images/cart.png') ,
      animation: [
        {
          name: 'scale',
          type: 'bouncing',
        },
      ],
      textStyle:
      [
        {
          paddingTop:5,
          fontSize:14
      }
     ],
     iconStyle:
     [
       {
       height:30,
       width:30
       }
    ],
    },
  },
};

const defaultConfig = {
  lazy: true,
  defaultRoute: 'Screen_3',
  screenOptions: {
    showTitle: true,
    animated: true,
    buttonView: TabButton,
    activeTintColor: 'green',
    inactiveTintColor: '#818692',
    animation: ['ripple', 'rotationZ'],
  },
};

const TabNav = TabNavigation(navigationRouter, defaultConfig);