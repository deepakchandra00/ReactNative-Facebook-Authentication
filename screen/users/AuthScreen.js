//import liraries
import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase'

// create a component
const AuthScreen = (props) => {
    /*facebook = async () => {
        const {type, token}  =   await Facebook.logInWithReadPermissionsAsync(470478656998901, {
                                                                permission:"public_profile"
                                                            })
    
           if(type == "success"){
               const credential =  firebase.auth.FacebookAuthProvider.credential(token)
    
               firebase.auth().signInWithCredential(credential)
               .catch(error => {
                   console.log(error)
               })
           }
    
           props.navigation.navigate('Jobs')
    
           } */



           async function logIn() {
            try {
              await Facebook.initializeAsync('470478656998901');
              const {
                type,
                token,
              } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
              });
              if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                //const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                const credential =  firebase.auth.FacebookAuthProvider.credential(token)
                //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                firebase.auth().signInWithCredential(credential)
                .catch(error => {
                    console.log(error)
                })

              } else {
                // type === 'cancel'
              }
            } catch ({ message }) {
              alert(`Facebook Login Error: ${message}`);
            }
          }
          


    return (
        <View style={styles.container}>
            <Text>Tap to login with facebook</Text>
            <Button title="Login with Facebook" onPress={logIn} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default AuthScreen;
