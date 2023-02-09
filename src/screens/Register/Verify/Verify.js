import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { verifyRequest } from '../../../services/api';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './index';
import Loading from '../../../components/Loading';
import { useRoute } from '@react-navigation/native';

export default function Verify({route}) {
    const images = require('../../../assets/images/background.png');
    const [visible, setVisible] = useState(false);
    const [code, setCode] = useState();
    const [otpError, setOtpError] = useState("");

    // const onHandleSubmit = async () => {
    //     try {
    //         const { id } = route.params;
    //         const body = { code }
    //         const {data} = await verifyRequest.post(`/user/register-active/${id}`, body);
    //         console.log("data", data);
    //     } catch (error) {
    //         if (error.response) {
    //             console.log(error.response.data);
    //             setOtpError(error.response.data.msg);
    //         } else if (error.request) {
    //             console.log(error.request);
    //         } else {
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     }
    // }

    return (
        // Login Body
        <ScrollView>
            <Loading visible={visible} />
            <ImageBackground style={styles.wrapper} source={require('../../../assets/images/loginImage/background.jpg')}>
                <Image style={{ width: 180, height: 180 }} source={require('../../../assets/images/logo.png')}/>
                <View style={styles.textboxlayout}>
                    <Text style={styles.titleFP}>
                        Nhập mã xác minh!
                    </Text>
                    <Text style={styles.titleExplane}>
                        Vui lòng nhập mã xác minh vừa được gửi vào Email của bạn
                    </Text>

                    <OTPInputView
                        style={{ width: '80%', height: 30, marginVertical: 20, alignSelf: 'center' }}
                        pinCount={6}
                        placeholderTextColor
                        autoFocusOnLoad
                        codeInputFieldStyle={{ width: 30, height: 50, borderWidth: 0, borderBottomWidth: 1, color: 'black' }}
                        codeInputHighlightStyle={{ borderColor: "#03DAC6", }}
                        onCodeFilled={(code) => setCode(code)}
                    />

                    <Text style={{fontStyle: 'italic', color: 'red',width: '80%',textAlign: 'center'}}>{otpError}</Text>

                    <TouchableOpacity style={styles.btnVerify}
                    >
                        <Text style={styles.txtAccess}>Xác nhận</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </ScrollView>
    );
}