import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import {ToastAndroid} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    }
    this.addNewDate = this.addNewDate.bind(this);
  }

  addNewDate() {
    const hits = this.state.hits;
    hits.push(new Date());
    this.setState({hits: hits});
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          flex: .8,
          padding: 30
        }}>

        <View style={{backgroundColor: 'rgba(100, 100, 255, .4)', flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'orange'}}>
            <Text>My button</Text>
        </TouchableOpacity>

        </View>
        <View style={{backgroundColor: 'rgba(100, 100, 255, .4)', flex: 1, flexDirection: 'column'}}>
          <Button title="press me" onPress={this.addNewDate}></Button>
        </View>
        <View style={{backgroundColor: 'rgba(100, 100, 255, .4)', flex: 1, flexDirection: 'column'}}>
          <Button title="press me" style={{width: '100%'}} onPress={this.addNewDate}></Button>
        </View>
        <View style={{backgroundColor: 'rgba(100, 100, 255, .4)', flex: 1, flexDirection: 'column'}}>
          <Button title="press me" style={{width: '100%'}} onPress={this.addNewDate}></Button>
        </View>
        <Text>
          {this.state.hits.map(item=>{
            return 'Hello ja!!';
          })}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ounce1: {
    backgroundColor: 'orangered',
    alignSelf: 'stretch',
  },
  ounce2: {
    backgroundColor: 'orange',
    alignSelf: 'stretch'
  }
});
