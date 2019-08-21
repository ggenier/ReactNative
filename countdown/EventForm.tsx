import React, {Component } from 'react';
import {
   View,
   Text,
   TouchableHighlight,
} from 'react-native'
;


class EventForm extends Component{
   static navigationOptions = {
      title: 'Add an event',
    };

   render() {
      const {navigate} = this.props.navigation;
      return(
         <View>
            <TouchableHighlight
               onPress={() => navigate('list')}
            >
               <Text>Add</Text>
            </TouchableHighlight>
         </View>
      );
   }
}

export default EventForm;