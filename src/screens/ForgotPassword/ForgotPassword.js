import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from './styles';
import { getLogin } from '../../services/api';
import Loading from '../../components/Loading';



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

    const onChangeViewPass = () => setIsViewPass(!isViewPass);



    return (
        // Login Body
        <ScrollView style={styles.container}>
            <Loading visible={visible} />
            <View style={styles.wrapper}>

                <View style={styles.logolayout}>

                    <ImageBackground source={images} resizeMode='cover' style={styles.bgImage}>

                        {/** Logo */}
                        <View style={styles.logo}>
                            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
                        </View>
                        <View style={styles.title}>
                            <Text></Text>
                        </View>

                    </ImageBackground>
                </View>

                <View style={styles.textboxlayout}>
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
                    <TouchableOpacity style={styles.btnlogin} onPress={onHandleForgetPass} >
                        <Text style={styles.btnloginContent}>Tiếp tục</Text>
                    </TouchableOpacity>


                    {/** Register here */}
                    <TouchableOpacity style={styles.regishere} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: 'red', textDecorationLine: 'underline' }}>Trở lại</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    );
}