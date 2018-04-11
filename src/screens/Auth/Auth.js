import React, { Component } from 'react'; 
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component {
    loginHandler = () => {
        //how do we get to a different screen?? 
        startMainTabs(); 
    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.textHeading}> Please log in </Text>
                <Button title="Switch to Login" />

                <View style={styles.inputContainer}>
                <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
                <DefaultInput placeholder="Password" style={[styles.input]} />
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                
                <Button title="Login" onPress = {this.loginHandler} />
               
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container:{
        // borderColor: "red", 
        // borderWidth: 1, 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer:{
        width: "80%"
    },
    input: {
        backgroundColor: "#eee", 
        borderColor: "#bbb"
    }
    
});

export default AuthScreen; 