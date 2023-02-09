import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

export default function swiper() {
    return (
        <View style={{ width: '100%', height: 200, marginTop: 10 }}>

            <Swiper
                showsButtons={false}
                loop={true}
                horizontal={true}
                autoplay={false}
                dot={
                    <View
                        style={{ width: 7, height: 7, borderRadius: 7 / 2, margin: 4, backgroundColor: 'gray', position: 'relative', top: 55 }}
                    >
                    </View>
                }
                activeDot={
                    <View
                        style={{ width: 14, height: 14, borderRadius: 7, margin: 4, backgroundColor: '#e4983e', position: 'relative', top: 55 }}
                    >
                    </View>
                }
            >
                <View style={{ width: '90%', height: '100%', marginHorizontal: '5%' }}>
                    <Image
                        resizeMode='cover'
                        source={require('../../assets/images/Home/slider1.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    />
                </View>
                <View style={{ width: '90%', height: '100%', marginHorizontal: '5%' }}>
                    <Image
                        resizeMode='cover'
                        source={require('../../assets/images/Home/slider2.jpg')}
                        style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    />
                </View>
                <View style={{ width: '90%', height: '100%', marginHorizontal: '5%' }}>

                    <Image
                        resizeMode='cover'
                        source={require('../../assets/images/Home/slider3.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    />
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({

});