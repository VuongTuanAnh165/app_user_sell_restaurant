import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import colors from '../../config/colors';
import { getLogin } from '../../services/api';
import Loading from '../../components/Loading';
import { BlurView } from '@react-native-community/blur';
import ButtonLogin from '../../components/Button';



export default function ForgotPassword({ navigation }) {

    const images = require('../../assets/images/background.png');
    const [visible, setVisible] = useState(false);
    const [emailValidError, setEmailValidError] = useState('');
    const [isViewPass, setIsViewPass] = useState(true);
    const [email, setEmail] = useState('');
    //console.log(email);


    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(val) === false) {
            setEmailValidError('*Email không hợp lệ!');
        } else if (reg.test(val) === true) {

            setEmailValidError('');
        }

    };

    const onHandleForgetPass = () => {
        navigation.navigate("VerifyOTP");
    };

    return (
        // Login Body
        <ScrollView>
            <Loading visible={visible} />
            <LinearGradient style={styles.wrapper} colors={[colors.primary, colors.orange]}>

                <View style={{ position: 'absolute', justifyContent: "space-around" }}>
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-1.png')} />
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-2.png')} />
                </View>
                {/** Logo */}
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
                </View>

                <Image style={styles.orange} source={require('../../assets/images/pineapple.png')} />

                <View style={styles.form}>
                    {/** Textbox user/pass */}
                    <Text style={styles.titleFP}>
                        Bạn quên mật khẩu?
                    </Text>
                    <Text style={styles.titleExplane}>
                        Nhập email của bạn cho quy trình xác minh,
                        chúng tôi sẽ gửi mã xác minh đến email của bạn.
                    </Text>

                    <View style={styles.userSpace}>
                        <Image style={styles.iconUserTextInput}
                            source={require('../../assets/images/emailIcon.png')}
                        />
                        <TextInput style={styles.userTextbox}
                            placeholder="Example@gmail.com"
                            placeholderTextColor="gray"
                            value={email}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={value => {
                                setEmail(value);
                                handleValidEmail(value);
                            }}
                        />
                    </View>
                    <Text style={styles.textError}>{emailValidError}</Text>

                    {/** Button Login */}
                    <ButtonLogin style={styles.btnlogin} text="Tiếp tục" onPress={() => navigation.navigate("VerifyOTP")} />

                    {/** Register here */}
                    <TouchableOpacity style={styles.regishere} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: 'red', textDecorationLine: 'underline' }}>Trở lại</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </ScrollView>

    );
}