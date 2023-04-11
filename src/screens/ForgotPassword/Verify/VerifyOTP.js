import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../config/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import { getLogin } from '../../../services/api';
import Loading from '../../../components/Loading';
import ButtonLogin from '../../../components/Button';



export default function VerifyOTP({ navigation }) {

    const [visible, setVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [clearInput, setClearInput] = useState('');
    console.log(otp);

    const onHandleVerifyOTP = () => {
        navigation.navigate("PassReset");
    };

    const resendOTP = () => { }

    return (
        // Login Body
        <ScrollView>
            <Loading visible={visible} />
            <LinearGradient style={styles.wrapper} colors={[colors.primary, colors.orange]}>
                <View style={{ position: 'absolute', justifyContent: "space-around" }}>
                    <Image style={styles.image} source={require('../../../assets/images/bgshapes-yellow-1.png')} />
                    <Image style={styles.image} source={require('../../../assets/images/bgshapes-yellow-2.png')} />
                </View>
                {/** Logo */}
                <Image style={styles.logoImage} source={require('../../../assets/images/logo.png')} />

                <Image style={styles.orange} source={require('../../../assets/images/pineapple.png')} />

                <View style={styles.textboxlayout}>
                    {/** Textbox user/pass */}
                    <Text style={styles.titleFP}>
                        Nhập mã xác minh!
                    </Text>
                    <Text style={styles.titleExplane}>
                        Nhập mã 4 ký tự mà bạn nhận được từ
                        email của bạn.
                    </Text>

                    <OTPInputView
                        style={styles.otpInput}
                        pinCount={6}
                        autoFocusOnLoad
                        codeInputFieldStyle={{ width: 30, height: 45, borderWidth: 0, borderBottomWidth: 1, color: 'black' }}
                        codeInputHighlightStyle={{ borderColor: "#03DAC6" }}
                        onCodeChanged={(code => {
                            setOtp(code);
                        })}
                    />

                    {/** Button Login */}
                    <ButtonLogin style={styles.btnlogin} text="Tiếp tục" onPress={onHandleVerifyOTP} />
                </View>

            </LinearGradient>
        </ScrollView>

    );
}