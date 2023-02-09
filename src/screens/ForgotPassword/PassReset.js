import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PassResetstyles from './PassResetstyles';
import { getLogin } from '../../services/api';
import Loading from '../../components/Loading';



export default function PassReset() {

    const images = require('../../assets/images/background.png');
    const [visible, setVisible] = useState(false);
    const [emailValidError, setEmailValidError] = useState('');
    const [isViewPass, setIsViewPass] = useState(false);
    const [viewPass, setViewPass] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //console.log(password);


    const onHandleResetPass = () => {
        Alert.alert(`Reset Complete!`);
    };

    const onChangeViewPass = () => setViewPass(!viewPass);
    const onChangeIsViewPass = () => setIsViewPass(!isViewPass);



    return (
        // Login Body
        <ScrollView style={PassResetstyles.container}>
            <Loading visible={visible} />
            <View style={PassResetstyles.wrapper}>

                <View style={PassResetstyles.logolayout}>

                    <ImageBackground source={images} resizeMode='cover' style={PassResetstyles.bgImage}>

                        {/** Logo */}
                        <View style={PassResetstyles.logo}>
                            <Image style={PassResetstyles.logoImage} source={require('../../assets/images/logo.png')} />
                        </View>
                        <View style={PassResetstyles.title}>
                            <Text></Text>
                        </View>

                    </ImageBackground>
                </View>

                <View style={PassResetstyles.textboxlayout}>
                    {/** Textbox user/pass */}
                    <Text style={PassResetstyles.titleFP}>
                        Đặt lại mật khẩu của bạn!
                    </Text>
                    <Text style={PassResetstyles.titleExplane}>
                        Đặt mật khẩu mới cho tài khoản của bạn để
                        bạn có thể đăng nhập và truy cập tất cả các tính năng.
                    </Text>




                    <View style={PassResetstyles.passSpace}>
                        <Image style={PassResetstyles.iconUserTextInput}
                            source={require('../../assets/images/passwordIcon.png')}
                        />
                        <TextInput style={PassResetstyles.passTextbox}
                            placeholder="Nhập mật khẩu"
                            placeholderTextColor="gray"
                            secureTextEntry={isViewPass ? true : false}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={onChangeIsViewPass} style={{ alignSelf: 'center' }}>
                            <View >
                                {isViewPass ? <Image style={PassResetstyles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={PassResetstyles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={PassResetstyles.passSpace}>
                        <Image style={PassResetstyles.iconUserTextInput}
                            source={require('../../assets/images/passwordIcon.png')}
                        />
                        <TextInput style={PassResetstyles.passTextbox}
                            placeholder="Xác nhận mật khẩu"
                            placeholderTextColor="gray"
                            secureTextEntry={viewPass ? true : false}
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={onChangeViewPass} style={{ alignSelf: 'center' }}>
                            <View >
                                {viewPass ? <Image style={PassResetstyles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={PassResetstyles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                            </View>
                        </TouchableOpacity>
                    </View>



                    {/** Button Login */}
                    <TouchableOpacity style={PassResetstyles.btnlogin} onPress={onHandleResetPass} >
                        <Text style={PassResetstyles.btnloginContent}>Đổi mật khẩu</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </ScrollView>

    );
}