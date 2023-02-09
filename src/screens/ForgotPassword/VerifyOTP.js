import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useSelector, useDispatch } from "react-redux";
import VerifyOTPstyles from './VerifyOTPstyles';
import { getLogin } from '../../services/api';
import Loading from '../../components/Loading';



export default function VerifyOTP({ navigation }) {

    const images = require('../../assets/images/background.png');
    const [visible, setVisible] = useState(false);
    const [emailValidError, setEmailValidError] = useState('');
    const [isViewPass, setIsViewPass] = useState(true);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [clearInput, setClearInput] = useState('');
    console.log(otp);

    const onHandleVerifyOTP = () => {
        navigation.navigate("PassReset");
    };


    const resendOTP = () => {

    };

    const onChangeViewPass = () => setIsViewPass(!isViewPass);



    return (
        // Login Body
        <ScrollView style={VerifyOTPstyles.container}>
            <Loading visible={visible} />
            <View style={VerifyOTPstyles.wrapper}>

                <View style={VerifyOTPstyles.logolayout}>

                    <ImageBackground source={images} resizeMode='cover' style={VerifyOTPstyles.bgImage}>

                        {/** Logo */}
                        <View style={VerifyOTPstyles.logo}>
                            <Image style={VerifyOTPstyles.logoImage} source={require('../../assets/images/logo.png')} />
                        </View>
                        <View style={VerifyOTPstyles.title}>
                            <Text></Text>
                        </View>

                    </ImageBackground>
                </View>

                <View style={VerifyOTPstyles.textboxlayout}>
                    {/** Textbox user/pass */}
                    <Text style={VerifyOTPstyles.titleFP}>
                        Nhập mã xác minh!
                    </Text>
                    <Text style={VerifyOTPstyles.titleExplane}>
                        Nhập mã 4 ký tự mà bạn nhận được từ
                        email của bạn.
                    </Text>


                    <OTPInputView
                        style={{ width: '80%', height: 100, alignSelf: 'center' }}
                        pinCount={6}
                        placeholderTextColor
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={{ width: 30, height: 45, borderWidth: 0, borderBottomWidth: 1, color: 'black' }}
                        codeInputHighlightStyle={{ borderColor: "#03DAC6", }}
                        onCodeChanged={(code => {
                            setOtp(code);
                        })}
                    />




                    {/** Button Login */}
                    <TouchableOpacity style={VerifyOTPstyles.btnlogin}
                        onPress={onHandleVerifyOTP}
                    >
                        <Text style={VerifyOTPstyles.btnloginContent}>Tiếp tục</Text>
                    </TouchableOpacity>


                    {/** Register here */}
                    <TouchableOpacity style={VerifyOTPstyles.regishere} onPress={resendOTP}>
                        <Text style={{ color: 'black' }}>Gửi lại mã!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    );
}