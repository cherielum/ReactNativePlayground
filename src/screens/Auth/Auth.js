import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    };


    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
                viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
            });
        });
    }


    loginHandler = () => {
        //how do we get to a different screen??
        startMainTabs();
    }

    render (){
            let headingText = null;

            if (this.state.viewMode === "portrait").height > 500){
                headingText = (
                    <MainText>
                        <HeadingText> Please log in </HeadingText>
                    </MainText>
                )
            }
            return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>

            <ButtonWithBackground color="#29aaf4" onPress={() => alert("hello!")}>Switch to Login</ButtonWithBackground>
            <View style={styles.inputContainer}>
                <DefaultInput placeholder="Your E-mail Address" style={styles.input} />

                    <View style={this.state.viewMode === "portrait"
                                 ? styles.portraitPasswordContainer
                                 : styles.landscapePasswordContainer}>

                    <View style ={{width: this.state.respStyles.pwWrapperWidth}}>
                        <DefaultInput placeholder="Password" style={[styles.input]} />
                    </View>
                    <View style ={{width: this.state.respStyles.pwWrapperWidth}}>
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                    </View>
                </View>
            </View>
            <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} > Submit </ButtonWithBackground>
            </View>
            </ImageBackground>
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
    backgroundImage:{
        width:"100%",
        flex: 1
    },
    inputContainer:{
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }

});

export default AuthScreen;