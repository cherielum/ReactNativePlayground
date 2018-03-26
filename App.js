import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
//import placeImage from "./src/assets/hawaii.jpg"; //js object
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/sctions/index';

class App extends Component {
 placeAddedHandler = placeName => {
  this.props.onAddPlace(placeName);
 };


  placeDeletedHandler = () => {
    this.props.onDeletePlace(); 
  };
      
  
  modalClosedHandler = () => {
    this.props.onDeselectPlace(); 
  };

  //  this.setState(prevState => {
  //    return {
  //      places: prevState.places.filter(place => {
  //        return place.key !== key;
  //      })
  //    }
  //  }); 
 //}

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
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

//map state to props
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch (addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()), 
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    oneDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App); 