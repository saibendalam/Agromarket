import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  
} from 'react-native';
import { Avatar, Card, Button, Title, Paragraph } from 'react-native-paper';


export default class Ontap extends Component {
  static navigationOptions = {
    headerTitleStyle: { flex: 1, textAlign: 'center'},
    title: 'Home',
  };
  render() {
    return (
        <View>
        <ScrollView  showsVerticalScrollIndicator={false} >
       
          <View style={styles.main}>
            <Card onPress={()=>{this.props.navigation.navigate('Pressed')}}  elevation={6} >
  
              <Card.Content>
  
                <Title>Tomatos </Title>
                <Paragraph></Paragraph>
  
              </ Card.Content>
              <Card.Cover source={require('../images/tomato.png')} />
              <Card.Actions style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'darkblue', fontSize: 18 }}>Available sellers=22</Text>
                <Button   >Add to favorite</Button>
              </Card.Actions>
            </Card>
          </View>
          <View style={styles.main}>
            <Card elevation={6}>
  
              <Card.Content>
  
                <Title>Potatos </Title>
                <Paragraph></Paragraph>
  
              </ Card.Content>
              <Card.Cover source={require('../images/potatos.jpg')} />
              <Card.Actions style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'darkblue', fontSize: 18 }}>Available sellers=22</Text>
                <Button>Add to favorite</Button>
              </Card.Actions>
            </Card>
          </View>
          <View style={styles.main}>
            <Card elevation={4}>
  
              <Card.Content>
  
                <Title>Brinjal </Title>
                <Paragraph></Paragraph>
  
              </ Card.Content>
              <Card.Cover source={require('../images/brinjal.jpg')} />
              <Card.Actions style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'darkblue', fontSize: 18 }}>Available sellers=22</Text>
                <Button>Add to favorite</Button>
              </Card.Actions>
            </Card>
          </View>
          <View style={styles.main}>
            <Card elevation={4}>
  
              <Card.Content>
  
                <Title>Ladiesfinger </Title>
                <Paragraph></Paragraph>
  
              </ Card.Content>
              <Card.Cover source={require('../images/ladiesfinger.jpg')} />
              <Card.Actions style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: 'darkblue', fontSize: 18 }}>Available sellers=22</Text>
                <Button>Add to favorite</Button>
              </Card.Actions>
            </Card>
          </View>
        </ScrollView>
  
      </View>
  
    );
  }
}

const styles = StyleSheet.create({


    main: {
      paddingTop: 8,
  
    },
  
  
  });
  