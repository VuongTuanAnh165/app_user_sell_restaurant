import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
    const [isModalVisible, setModalVisible] = useState(true);
    console.log(isModalVisible);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={isModalVisible}>
                <View>
                    <View style={{ width: '100%', height: 300, backgroundColor: '#fff', borderRadius: 7 }}>
                        <View style={{ height: '15%', borderBottomWidth: 0.5, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', marginLeft: '5%', fontWeight: 'bold' }}>Thông báo</Text>
                        </View>
                        <View style={{ height: '65%', justifyContent: 'center' }}>
                            <View style={{ height: '70%', alignItems: 'center' }}>
                                <Image style={{ width: 100, height: '95%' }} source={require('../assets/images/Modal/modalPicture.png')} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'red' }}>Tài khoản hoặc mật khẩu không chính xác!</Text>
                            </View>
                        </View>
                        <View style={{ height: '20%', borderTopWidth: 0.5, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ width: '40%', height: 30, backgroundColor: '#e4983e', borderRadius: 5, position: 'absolute', right: 10, alignItems: 'center' }}>
                                <Text onPress={toggleModal} style={{ color: '#fff', fontSize: 20 }}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default ModalTester;