import React, {Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

//middleware
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props); 
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
 
    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            } 
        }  
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName); 
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text>Share a Place with Us! </Text>
                <View style={styles.placeholder}>
                    <Text>Image Preview </Text>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" />
                </View>
                <View style={styles.placeholder}>
                    <Text>Map</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Locate Me" />
                </View>
                <DefaultInput placeholder="Place Name"/>
                <View style={styles.button}>
                    <Button title="Share the Place!" />
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
       margin: 8 
    }
})

const mapDispatchToProps = dispatch =>{
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))

    };
};
export default connect(null, mapDispatchToProps) (SharePlaceScreen); 