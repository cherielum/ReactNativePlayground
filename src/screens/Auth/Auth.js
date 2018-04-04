//screens are containers 

import React, {Component} from 'react'; 
import {View, Text, Button} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        //how do we get to a different screen?? 
        startMainTabs(); 
    }


    render (){
        return (
            <View>
                <Text> Auth Screen </Text>
                <Button title = "Login" onPress = {this.loginHandler} />
            </View>
        ); 
    }
}

export default AuthScreen; 