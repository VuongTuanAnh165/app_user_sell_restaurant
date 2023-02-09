import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Header, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';


export default function DynamicHeader() {
    return (
        <Header
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
                colors: ['#D8AB37', '#F18345'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            barStyle="default"
            containerStyle={{ width: '100%', height: 70 }}
            centerComponent={{
                text: "Restaurant",
                style: { color: "#fff" }
            }}
            leftComponent={
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../assets/images/RestaurantImage/backarrow.png')}
                        />
                    </TouchableOpacity>
                </View>
            }
            // placement="center"
            rightComponent={
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../assets/images/RestaurantImage/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        // marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
