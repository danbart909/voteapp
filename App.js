import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalState from './context/GlobalState.js'
import Home from './components/Home'
import Reps from './components/Reps'
import Elections from './components/Elections'
import Data from './components/Data'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {

    const Stack = createStackNavigator();

    return (
      <>
        <GlobalState>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'The Voting Booth' }}
              />
              <Stack.Screen
                name="Reps"
                component={Reps}
                options={{ title: 'Your Representatives' }}
              />
              <Stack.Screen
                name="Elections"
                component={Elections}
                options={{ title: 'Election Polls' }}
              />
              <Stack.Screen
                name="Data"
                component={Data}
                options={{ title: 'Data Page' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GlobalState>
      </>
    )
  }
}