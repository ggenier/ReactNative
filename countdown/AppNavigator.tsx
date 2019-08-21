import React from 'react';
import FlatList from 'react-native';
import Text from 'react-native';
import EventList from './EventLIst';
import EventForm from './EventForm';
import { createStackNavigator, createAppContainer } from 'react-navigation'
;

const StackNavigator = createStackNavigator({
  list: {screen: EventList, navigationOptions: () => ({title: 'Your events',}),},
  form: {screen: EventForm, navigationOptions: () => ({title: 'Add an event',}),},
});

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;

