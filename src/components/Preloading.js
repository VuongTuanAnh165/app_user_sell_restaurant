import { Text, View, Modal, ActivityIndicator, ImageBackground } from 'react-native';
import React, { Component } from 'react';

export default function Loading({ visible }) {
    return (
        <Modal transparent visible={visible}>
            <ImageBackground source={require('../assets/images/splashscreen.png')}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    //justifyContent: 'center',
                    //backgroundColor: 'black'
                    justifyContent: 'center',
                    paddingTop: '100%',
                }}>
                <ActivityIndicator size="large" color={'#e4983e'} animating={true} />
            </ImageBackground>
        </Modal>
    );
}