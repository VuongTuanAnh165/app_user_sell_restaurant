import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function ChangeSuccess() {
    return (
        <View style={{ width: windowWidth, minHeight: windowHeight, height: windowHeight, backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 200, height: 200, justifyContent: 'center', }}
                source={require('../../../assets/images/success.gif')}
            />
            <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold', marginBottom: 10 }}>Done!</Text>
            <Text style={{ color: '#6C7B8B' }} >Mật khẩu của bạn đã được thay đổi!</Text>
            <TouchableOpacity style={{ backgroundColor: '#e4983e', marginTop: 50, width: '80%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 3 }}
            //onPress
            >
                <Text style={{ fontSize: 18, fontWeight: '900', color: 'white' }}>TIẾP TỤC</Text>
            </TouchableOpacity>
        </View>
    );
}