import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView, Image, Animated } from 'react-native';
import React, { useState } from 'react';

export default function HeaderBanner() {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    return (
        <SafeAreaView>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: scrollY.interpolate({
                            inputRange: [10, 160, 185],
                            outputRange: [140, 20, 0],
                            extrapolate: 'clamp'
                        }),
                        opacity: scrollY.interpolate({
                            inputRange: [1, 75, 170],
                            outputRange: [1, 1, 0],
                            extrapolate: 'clamp'
                        })
                    }
                ]}>
                <Image
                    source={require('../../../assets/images/RestaurantImage/backarrow.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
                <Image
                    source={require('../../../assets/images/RestaurantImage/search.png')}
                    style={{ width: 120, height: 40 }}
                    resizeMode="contain"
                />
                <Image
                    source={require('../../../assets/images/RestaurantImage/menu.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
            </Animated.View>

            <ScrollView
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: scrollY }
                    },
                }],
                    { useNativeDriver: false })}
            >
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10, borderBottomColor: '#FFF'
    },
    box: {
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5
    }
}); 