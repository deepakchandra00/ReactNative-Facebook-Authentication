//import liraries
import React, { useEffect, Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "API Key",
    authDomain: "jobplatform-b4f50.firebaseapp.com",
    databaseURL: "https://jobplatform-b4f50.firebaseio.com",
    projectId: "jobplatform-b4f50",
    storageBucket: "jobplatform-b4f50.appspot.com",
    messagingSenderId: "317472909457",
    appId: "App ID",
    measurementId: "G-0HDB8VQ9ZM"
  };

firebase.initializeApp(firebaseConfig);



// create a component
const StartupScreen = (props) => {
    const tryLogin = async()=>{
        try {
            await firebase.auth().onAuthStateChanged(user=>{
                if(user!=null){
                    dispatch(authActions.loggedIn(user.uid, user.getIdToken, user.displayName, user.photoURL ))
                    props.navigation.navigate('Jobs')
                }else{
                    console.log('user is not logged in')
                    props.navigation.navigate('Auth');
                }
            })
        }catch{
            console.log('errors')
        }
    }
    useEffect(()=>{
        tryLogin()
    })
    return (
        <View>
            <ActivityIndicator size="large" />
        </View>
    );
};

//make this component available to the app
export default StartupScreen;


