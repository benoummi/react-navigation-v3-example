import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends React.Component {
  static navigationOptions = {
    headerStyle:{
      backgroundColor: 'blue'
    }
  }

 render() {
   return (
     <View style={styles.container}>
       <Text>Home</Text>
     </View>
   );
 }
}
class Dashboard extends React.Component {
  static navigationOptions = {
    headerStyle:{
      backgroundColor: 'white'
    }
  }

 render() {
   return (
    <ScrollView>
      <View style={{height: 10000, borderWidth: 15, borderColor: 'green'}}>
       <Text>Dashboard</Text>
     </View>
    </ScrollView>
   );
 }
}

const AppStackNavigator = createStackNavigator({
  Home: Home,
  Dashboard: Dashboard,
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
})

const AppDrawerNaigator = createDrawerNavigator({
  Home: Home,
  Dashboard: Dashboard,
},{
  unmountInactiveRoutes: true,
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
})

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
