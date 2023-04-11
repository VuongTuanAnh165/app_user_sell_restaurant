import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import styles from './styles';
import colors from '../../../config/colors';
import { getLogin } from '../../../services/api';
import Loading from '../../../components/Loading';
import ButtonLogin from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';



export default function PassReset() {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false);
    const [isViewPass, setIsViewPass] = useState(false);
    const [viewPass, setViewPass] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onHandleResetPass = () => {
        Alert.alert(`Reset Complete!`);
        navigation.navigate("Login")
    };

    const onChangeViewPass = () => setViewPass(!viewPass);
    const onChangeIsViewPass = () => setIsViewPass(!isViewPass);



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
                        Đặt lại mật khẩu của bạn!
                    </Text>
                    <Text style={styles.titleExplane}>
                        Đặt mật khẩu mới cho tài khoản của bạn để
                        bạn có thể đăng nhập và truy cập tất cả các tính năng.
                    </Text>

                    <View style={styles.passSpace}>
                        <Image style={styles.iconUserTextInput}
                            source={require('../../../assets/images/passwordIcon.png')}
                        />
                        <TextInput style={styles.passTextbox}
                            placeholder="Nhập mật khẩu"
                            placeholderTextColor="gray"
                            secureTextEntry={isViewPass ? true : false}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={onChangeIsViewPass} style={{ alignSelf: 'center' }}>
                            <View >
                                {isViewPass ? <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.passSpace}>
                        <Image style={styles.iconUserTextInput}
                            source={require('../../../assets/images/passwordIcon.png')}
                        />
                        <TextInput style={styles.passTextbox}
                            placeholder="Xác nhận mật khẩu"
                            placeholderTextColor="gray"
                            secureTextEntry={viewPass ? true : false}
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                        ></TextInput>
                        <TouchableOpacity onPress={onChangeViewPass} style={{ alignSelf: 'center' }}>
                            <View >
                                {viewPass ? <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                            </View>
                        </TouchableOpacity>
                    </View>



                    {/** Button Login */}
                    <ButtonLogin style={styles.btnlogin} text="Đổi mật khẩu" onPress={onHandleResetPass} />
                    


                </View>

            </LinearGradient>
        </ScrollView>

    );
}