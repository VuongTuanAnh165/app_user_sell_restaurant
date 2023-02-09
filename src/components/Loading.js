import { Text, View, Modal, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';

export default function Loading({ visible }) {
    return (
        <Modal transparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={'#e4983e'} animating={true} />
            </View>
        </Modal>
    );
}