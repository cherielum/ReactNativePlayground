import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
//import placeImage from "./src/assets/hawaii.jpg"; //js object
import PlaceDetailModal from "./src/components/PlaceDetailModal/PlaceDetail"; 



export default class App extends Component {
 state = {
   places: [],
   selectedPlace: null
 };

 placeAddedHandler = placeName => {
  this.setState(prevState => {
    return {
      places: prevState.places.concat({
      key: Math.random(), 
      name: placeName,
      image: {
      //placeImage, 
        uri: "https://www.getawaytoday.com/image/3759/11683/hawaii-2.jpg"
      }
    })
    };
  });
 };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key; 
        });
      };
  });
      
  

  //  this.setState(prevState => {
  //    return {
  //      places: prevState.places.filter(place => {
  //        return place.key !== key;
  //      })
  //    }
  //  }); 
 }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetailModal selectedPlace = {this.state.selectedPlace}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} 
        onItemSelected= {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
});
