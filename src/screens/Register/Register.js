import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { size } from '../../config/Responsive'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur'
import ButtonLogin from '../../components/Button'
import colors from '../../config/colors'

const windowHeight = Dimensions.get('window').height

export default function Signup() {
    const [viewPass, setViewPass] = useState(false)
    const [isViewPass, setIsViewPass] = useState(false)
    const navigation = useNavigation()
    const onChangeViewPass = () => setViewPass(!viewPass)
    const onChangeIsViewPass = () => setIsViewPass(!isViewPass)
    return (
        <ScrollView>
            <LinearGradient style={styles.wrapper} colors={["#cddc39", "#ff5722"]}>
                <View style={{ position: 'absolute', justifyContent: "space-around" }}>
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-1.png')} />
                    <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-2.png')} />
                </View>
                <Image style={styles.orange} source={require('../../assets/images/orange-slice.png')} />
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                <Text style={styles.title}>Đăng ký</Text>
                <View style={styles.content}>
                    <View style={styles.form} >
                        <View style={styles.inputItem}>
                            <TextInput
                                style={{ fontSize: 18 }}
                                mode='outlined'
                                label="Họ và tên"
                                placeholder="Nhập họ và tên"
                                placeholderTextColor='#cccc'
                                activeOutlineColor='none'
                                outlineColor={colors.white}
                            />
                        </View>
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
                                label="Mật khẩu"
                                placeholder="Nhập mật khẩu"
                                placeholderTextColor='#cccc'
                                activeOutlineColor='none'
                                outlineColor={colors.white}
                                secureTextEntry={isViewPass ? false : true}
                                right={
                                    <TextInput.Icon
                                        icon={isViewPass ? require('../../assets/images/eye-off.png') : require('../../assets/images/eye.png')}
                                        onPress={onChangeIsViewPass}
                                    />
                                }
                            />
                        </View>
                        <View style={styles.inputItem}>
                            <TextInput
                                style={{ fontSize: 18 }}
                                mode='outlined'
                                label="Nhập lại mật khẩu"
                                placeholder="Nhập lại mật khẩu"
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
                        <ButtonLogin text="Đăng ký" />
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}>Bạn đã có tài khoản? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: "600" }}> Đăng nhập</Text>
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
    orange: {
        position: "absolute",
        left: size(250),
        top: size(100)
    },
    logo: {
        width: size(100),
        height: size(100)
    },
    title: { 
        fontSize: 25, 
        fontWeight: "600", 
        color: colors.white, 
    },
    content: {
        alignItems: "center"
    },
    form: {
        width: size(300),
        height: size(450),
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 16,
        justifyContent: "space-around",
        borderRadius: 10,
    },
    inputItem: {
        height: size(70),
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: "center"
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
        tintColor: "#fff"
    }
})