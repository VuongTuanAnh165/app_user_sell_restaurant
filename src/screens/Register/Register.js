import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'
import styles from "./index"
import { useFormik, Formik } from 'formik'
import { object, string } from 'yup'
import Loading from '../../components/Loading'
import { userRequest } from '../../services/api'
import { useRef } from 'react'

export default function Register({ navigation }) {
    const [isError, setIsError] = useState(isError);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [isViewPass, setIsViewPass] = useState(false);
    const [viewPass, setViewPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_Confirmation] = useState('');

    // const fomik = useFormik({
    //     initialValues: {
    //         name: "",
    //         email: "",
    //         password: "",
    //         confirm_password: ""
    //     }
    // })

    // vali = object({
    //     name: string().required(),
    //     email: string().email(),
    //     password: string()
    // })

    // const onHandleSignUp = async () => {
    //     try {
    //         const body = {
    //             name,
    //             email,
    //             password,
    //             password_confirmation
    //         }
    //         const { data } = await userRequest.post('/user/register', body);
    //         console.log(data);
    //         const { id } = data.data.user
    //         navigation.navigate('Verify', {
    //             id: id
    //         });
    //     } catch (error) {
    //         if (error.response) {
    //             console.log("Error response: ", error.response.data);
    //             setNameError(error.response.data.errors.name);
    //             setGenderError(error.response.data.errors.gender);
    //             setAddressError(error.response.data.errors.address);
    //             setEmailError(error.response.data.errors.email);
    //             setPasswordError(error.response.data.errors.password);
    //             setPassword_ConfirmationError(error.response.data.errors.password_confirmation);
    //         } else if (error.request) {
    //             console.log("Error request: ", error.request);
    //         } else {
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     }
    // };

    const onChangeIsViewPass = () => setIsViewPass(!isViewPass);

    const onChangeViewPass = () => setViewPass(!viewPass);

    return (
        <ScrollView style={styles.wrapper}>
            <ImageBackground style={styles.imgBg} source={require('../../assets/images/loginImage/background.jpg')}>
                <View>
                    <Image style={{ width: 150, height: 150 }} source={require('../../assets/images/logo.png')} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={styles.title}>
                        <Text style={styles.text}>Đăng ký</Text>
                    </View>
                    <View style={styles.inputForm}>
                            <View style={styles.inputItem}>
                                <TextInput
                                    style={styles.textInput}
                                    value={name}
                                    label="Username"
                                    onChangeText={(ev) => setName(ev)}
                                    outlineColor="#fff"
                                    activeOutlineColor='none'
                                    mode='outlined'
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <TextInput
                                    style={styles.textInput}
                                    value={email}
                                    label="Email"
                                    onChangeText={(ev) => setEmail(ev)}
                                    outlineColor="#fff"
                                    activeOutlineColor='none'
                                    mode='outlined'
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <TextInput
                                    style={styles.textInput}
                                    value={password}
                                    label="Password"
                                    onChangeText={(ev) => setPassword(ev)}
                                    outlineColor="#fff"
                                    activeOutlineColor='none'
                                    secureTextEntry={viewPass ? false : true}
                                    right={
                                        <TextInput.Icon
                                            icon={viewPass ? require('../../assets/images/icon/eye.png') : require('../../assets/images/icon/eye-off.png')}
                                            onPress={onChangeViewPass}
                                        />
                                    }
                                    mode='outlined'
                                />
                            </View>
                            <View style={styles.inputItem}>
                                <TextInput
                                    style={styles.textInput}
                                    value={password_confirmation}
                                    label="Confirm Password"
                                    onChangeText={(ev) => setPassword_Confirmation(ev)}
                                    outlineColor="#fff"
                                    activeOutlineColor='none'
                                    mode='outlined'
                                    secureTextEntry={isViewPass ? false : true}
                                    right={
                                        <TextInput.Icon
                                            icon={isViewPass ? require('../../assets/images/icon/eye.png') : require('../../assets/images/icon/eye-off.png')}
                                            onPress={onChangeIsViewPass}
                                        />
                                    }
                                />
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Verify")}>
                            <Text style={{ fontFamily: "Nunito", fontSize: 16, fontWeight: 'bold', color: '#fff' }}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nvgLogin}>
                    <Text style={[styles.text, { fontSize: 16, marginRight: 10 }]}>
                        Bạn đã có tài khoản?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.text, { fontSize: 20, marginRight: 10 }]}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <Image style={styles.imgIcon} source={require('../../assets/images/icon/right-arrow.png')} />
                </View>
            </ImageBackground>
        </ScrollView>
    );
}