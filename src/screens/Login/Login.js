import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { size } from '../../config/Responsive'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../config/colors'
import ButtonLogin from '../../components/Button'

const windowHeight = Dimensions.get('window').height

export default function Login({ navigation }) {
    const [viewPass, setViewPass] = useState(false)

    const onChangeViewPass = () => setViewPass(!viewPass)
    return (
        <ScrollView style={{ flex: 1 }}>
            <LinearGradient style={styles.wrapper} colors={[colors.primary, colors.orange]}>
                <View style={{ position: 'absolute', justifyContent: "space-around" }}>
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-1.png')} />
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-2.png')} />
                </View>
                <Image style={styles.orange} source={require('../../assets/images/orange-slice.png')} />
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                <Text style={styles.title}>Đăng nhập</Text>
                <View style={styles.content}>
                    <View style={styles.form} >
                        <View style={styles.inputItem}>
                            <TextInput
                                style={{ fontSize: 18 }}
                                mode='outlined'
                                label="Email"
                                placeholder="Nhập email"
                                placeholderTextColor='#cccc'
                                activeOutlineColor='none'
                                outlineColor={colors.white}
                            />
                        </View>
                        <View style={styles.inputItem}>
                            <TextInput
                                style={{ fontSize: 18 }}
                                mode='outlined'
                                label="Password"
                                placeholder="Nhập password"
                                placeholderTextColor='#cccc'
                                activeOutlineColor='none'
                                outlineColor={colors.white}
                                secureTextEntry={viewPass ? false : true}
                                right={
                                    <TextInput.Icon
                                        icon={viewPass ? require('../../assets/images/eye-off.png') : require('../../assets/images/eye.png')}
                                        onPress={onChangeViewPass}
                                    />
                                }
                            />
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text style={{ fontSize: 20, color: colors.white }}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.btn}>
                            <Text style={{ fontSize: 23, color: '#fff' }}>Đăng nhập</Text>
                        </TouchableOpacity> */}
                        <View style={{height: 60}}>
                            <ButtonLogin text="Đăng nhập" onPress={() => navigation.navigate("Home")} />
                        </View>
                    </View>
                    <View style={styles.otherLogin}>
                        <Text style={{ textAlign: "center", color: colors.white, fontSize: 18 }}>Hoặc {'\n'} Đăng nhập với</Text>
                        <View style={styles.boxIcon}>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={require('../../assets/images/googleIcon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={require('../../assets/images/appleIcon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={require('../../assets/images/twitter.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={require('../../assets/images/windows-platform-logo.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.noAccount}>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: "600" }}> Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: windowHeight
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        color: colors.white,
        // marginBottom: size(15)
    },
    orange: {
        position: "absolute",
        left: size(250),
        top: size(100)
    },
    logo: {
        width: size(120),
        height: size(120)
    },
    content: {
        alignItems: "center"
    },
    form: {
        width: size(300),
        height: size(300),
        padding: 16,
        justifyContent: "space-evenly",
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    inputItem: {
        height: size(70),
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: "center"
    },
    noAccount: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "600"
    },
    image: {
        position: 'relative',
    },
    otherLogin: {
        width: size(300),
        height: size(100),
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    boxIcon: {
        flexDirection: 'row',
        width: size(200),
        justifyContent: "space-evenly"
    },
    icon: {
        width: size(25),
        height: size(25),
        tintColor: colors.white
    }
})