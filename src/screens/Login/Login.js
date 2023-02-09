import { View, Dimensions, Text, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground, ToastAndroid, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from './styles';
import Loading from '../../components/Loading';
import { userLogin } from '../../services/api';
// import ModalScreen from '../../components/ModalScreen';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Login({ navigation }) {

    const images = require('../../assets/images/background.png');
    const [visible, setVisible] = useState(false);
    const [emailValidError, setEmailValidError] = useState('');
    const [isViewPass, setIsViewPass] = useState(true);
    const [email, setEmailLogin] = useState('');
    //console.log(email);
    const [password, setPasswordLogin] = useState('');
    //console.log(password);

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(val) === false) {
            setEmailValidError('*Email không hợp lệ!');
        } else if (reg.test(val) === true) {

            setEmailValidError('');
        }

    };


    const onHandleLogin = async () => {
        // try {
        //     const body = {
        //         email,
        //         password
        //     };
        //     console.log("body", body);
        //     const { data } = await userLogin.post('/user/login', body);
        //     console.log("Message:", data.msg);
        //     // console.log("accessToken:", JSON.stringify(data.data.accessToken));
        //     // localStorage.setItem("accessToken: ", JSON.stringify(data.data.accessToken));
        //     setVisible(true);
        //     setTimeout(() => {
        //         setVisible(false);
        //         //Alert.alert(data.msg);
        //         // ToastAndroid.showWithGravity(
        //         //     'Login Success!',
        //         //     ToastAndroid.SHORT,
        //         //     ToastAndroid.TOP
        //         // );
        //         navigation.navigate("Account");
        //     }, 4000);


        // } catch (error) {
        //     if (error.response) {
        //         // console.log('error0:', error.response);
        //         // console.log('ErrorMessage:', error.response.data.msg);
        //         // Alert.alert(JSON.stringify(error.response.data.msg));
        //         console.log('MK sai:', error.response.data.code);
        //         if (error.response.data.code == 400) {
        //             //Alert.alert(JSON.stringify(error.response.data.msg));
        //             setModalVisible(true);
        //         } else if (error.response.data.code == 422) {
        //             // Alert.alert(JSON.stringify(error.response.data.errors.email));
        //             setModalVisible(true);
        //         }

        //     } else if (error.request) {
        //         console.log('request:', error.request);
        //     } else {
        //         console.log('Error', error.message);
        //     }
        //     console.log('config:', error.config);
        // }


        Alert.alert('BUM');
    };

    const onChangeViewPass = () => setIsViewPass(!isViewPass);



    return (
        // Login Body
        // <SafeAreaView style={styles.container}>
        //     {/* <Loading visible={visible} /> */}
        //     {/* <View style={{ flex: 1 }}>
        //         <Modal isVisible={isModalVisible}>
        //             <View>
        //                 <View style={{ width: '100%', height: 300, backgroundColor: '#fff', borderRadius: 7 }}>
        //                     <View style={{ height: '15%', borderBottomWidth: 0.5, justifyContent: 'center' }}>
        //                         <Text style={{ color: 'black', marginLeft: '5%', fontWeight: 'bold' }}>Thông báo</Text>
        //                     </View>
        //                     <View style={{ height: '65%', justifyContent: 'center' }}>
        //                         <View style={{ height: '70%', alignItems: 'center' }}>
        //                             <Image style={{ width: 100, height: '95%' }} source={require('../../assets/images/Modal/modalPicture.png')} />
        //                         </View>
        //                         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        //                             <Text style={{ color: 'red' }}>Tài khoản hoặc mật khẩu không chính xác!</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ height: '20%', borderTopWidth: 0.5, justifyContent: 'center' }}>
        //                         <TouchableOpacity style={{ width: '40%', height: 30, backgroundColor: '#e4983e', borderRadius: 5, position: 'absolute', right: 10, alignItems: 'center' }}>
        //                             <Text onPress={toggleModal} style={{ color: '#fff', fontSize: 20 }}>Xác nhận</Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                 </View>
        //             </View>
        //         </Modal>
        //     </View> */}

        //     {/* Login Body */}
        //     <View style={styles.wrapper}>

        //         <View style={styles.logolayout}>

        //             <ImageBackground source={images} resizeMode='cover' style={styles.bgImage}>

        //                 {/** Logo */}
        //                 <View style={styles.logo}>
        //                     <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
        //                 </View>

        //                 {/** Introduction */}
        //                 <View style={styles.title}>
        //                     <Text style={styles.titleContent}></Text>
        //                 </View>
        //             </ImageBackground>
        //         </View>

        //         <View style={styles.textboxlayout}>
        //             {/** Textbox user/pass */}
        //             <View style={styles.userSpace}>
        //                 <Image style={styles.iconUserTextInput}
        //                     source={require('../../assets/images/emailIcon.png')}
        //                 />
        //                 <TextInput style={styles.userTextbox}
        //                     placeholder="Nhập Email"
        //                     placeholderTextColor="gray"
        //                     value={email}
        //                     autoCorrect={false}
        //                     autoCapitalize='none'
        //                     onChangeText={value => {
        //                         setEmailLogin(value);
        //                         handleValidEmail(value);
        //                     }}
        //                 />
        //             </View>
        //             <Text style={styles.textError}>{emailValidError}</Text>

        //             <View style={styles.passSpace}>
        //                 <Image style={styles.iconUserTextInput}
        //                     source={require('../../assets/images/passwordIcon.png')}
        //                 />
        //                 <TextInput style={styles.passTextbox}
        //                     placeholder="Nhập mật khẩu"
        //                     placeholderTextColor="gray"
        //                     secureTextEntry={isViewPass ? true : false}
        //                     value={password}
        //                     onChangeText={text => setPasswordLogin(text)}
        //                 ></TextInput>
        //                 <TouchableOpacity onPress={onChangeViewPass} style={{ alignSelf: 'center' }}>
        //                     <View >
        //                         {isViewPass ? <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
        //                     </View>
        //                 </TouchableOpacity>
        //             </View>

        //             {/** Button Login */}
        //             <TouchableOpacity style={styles.btnlogin} onPress={onHandleLogin} >
        //                 <Text style={styles.btnloginContent}>Đăng nhập</Text>
        //             </TouchableOpacity>


        //             {/** Forgot password */}
        //             <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate("Account")}>
        //                 <Text style={{ color: 'black', textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Quên mật khẩu?</Text>
        //             </TouchableOpacity>

        //             {/** Register here */}
        //             <View style={styles.regishere}>
        //                 <Text style={{ color: 'black' }}>Bạn chưa có tài khoản?</Text>
        //                 <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        //                     <Text style={{ color: 'red' }}>&nbsp; Đăng ký</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>

        //     </View>
        // </SafeAreaView>


        <SafeAreaView
            style={{
                flex: 1,
                // backgroundColor: 'orange'
                justifyContent: 'center',
                alignContent: 'center'
            }}>
            <ImageBackground
                source={require('../../assets/images/loginImage/background.jpg')}
                resizeMode="contain"
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            >
                <View style={{
                    width: '100%',
                    height: '10%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{
                            height: '100%',
                            width: '20%'
                        }}
                    />
                </View>
                <View style={{
                    width: '100%',
                    height: '55%',
                    marginTop: '30%',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: '80%',
                        height: 35,
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>Sign in</Text>
                    </View>
                    <View style={{
                        marginTop: 27,
                        width: '75%',
                        height: 285,
                        backgroundColor: '#ffffff',
                        borderRadius: 10,
                        alignItems: 'center',
                        opacity: 0.8
                    }}>
                        <TextInput
                            style={{
                                width: '85%',
                                height: 60,
                                marginTop: 18,
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderTopRightRadius: 10,
                                backgroundColor: '#fff',
                            }}
                            label="Email or phone"
                        />
                        <TextInput
                            style={{
                                width: '85%',
                                height: 60,
                                marginTop: 17,
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                            label="Password"
                        />
                        <TouchableOpacity style={{ marginTop: 12 }}>
                            <Text style={{ color: 'black', fontSize: 18 }}>
                                Forgot your password?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: 12,
                                width: '85%',
                                height: 60,
                                backgroundColor: 'green',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 19.5, fontWeight: 'bold' }}>SIGN IN NOW</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '90%',
                        height: 115,
                        marginTop: 15,
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 15 }}>OR</Text>
                        <Text style={{ color: 'white', fontSize: 16 }}>Continue with</Text>
                        <View style={{ width: '100%', height: 45, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 35, width: 35, marginRight: 10 }}
                                    source={require('../../assets/images/loginImage/google1.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 35, width: 35, marginRight: 10 }}
                                    source={require('../../assets/images/loginImage/apple1.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 35, width: 35, marginRight: 10 }}
                                    source={require('../../assets/images/loginImage/twitter1.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 35, width: 35, marginRight: 10 }}
                                    source={require('../../assets/images/loginImage/facebook1.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: '20%',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        width: '90%',
                        height: '30%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 17 }}>Don't have a account?   </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>


        </SafeAreaView>


    );
}
