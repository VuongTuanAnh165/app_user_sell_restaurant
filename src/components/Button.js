import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { size } from '../config/Responsive';
import colors from '../config/colors';

export default function ButtonLogin(props) {
    return (
            <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: size(60),
        backgroundColor: colors.bgButton,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20, 
        color: colors.white
    }
});

