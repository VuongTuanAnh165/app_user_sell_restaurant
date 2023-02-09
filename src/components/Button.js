import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function ButtonDefault(props) {
    const { onPress, text } = props
    return (
        <View style={styles.btnDefault}>
            <LinearGradient style={styles.bgButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D8AB37', '#F18345']}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    btnDefault:{
        width: windowWidth,
        height: windowHeight/18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgButton: {
        width: '25%',
        height: "100%",
        borderRadius: 30,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16
    }
});

