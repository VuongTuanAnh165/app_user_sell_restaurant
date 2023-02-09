import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../ChangePassword/styles';

export default function ChangePassword() {

    const [oldpassword, setOldPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [retypepassword, setRetypePassword] = useState('');


    const [isViewPass, setIsViewPass] = useState(false);
    const [viewPass, setViewPass] = useState(false);
    const [retypeviewPass, setRetypeViewPass] = useState(false);

    const onChangeViewPass = () => setViewPass(!viewPass);
    const onChangeIsViewPass = () => setIsViewPass(!isViewPass);
    const onChangeRetypeIsViewPass = () => setRetypeViewPass(!retypeviewPass);




    return (
        <ScrollView style={{}}>
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Đổi mật khẩu</Text>
                </View>




                <View style={styles.passSpace}>
                    <Image style={styles.iconUserTextInput}
                        source={require('../../../assets/images/passwordIcon.png')}
                    />
                    <TextInput style={styles.passTextbox}
                        placeholder="Mật khẩu hiện tại"
                        placeholderTextColor="gray"
                        secureTextEntry={isViewPass ? true : false}
                        value={oldpassword}
                        onChangeText={text => setOldPassword(text)}
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
                        placeholder="Nhập mật khẩu mới"
                        placeholderTextColor="gray"
                        secureTextEntry={viewPass ? true : false}
                        value={newpassword}
                        onChangeText={text => setNewPassword(text)}
                    ></TextInput>
                    <TouchableOpacity onPress={onChangeViewPass} style={{ alignSelf: 'center' }}>
                        <View >
                            {viewPass ? <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.passSpace}>
                    <Image style={styles.iconUserTextInput}
                        source={require('../../../assets/images/passwordIcon.png')}
                    />
                    <TextInput style={styles.passTextbox}
                        placeholder="Xác nhận mật khẩu mới"
                        placeholderTextColor="gray"
                        secureTextEntry={retypeviewPass ? true : false}
                        value={retypepassword}
                        onChangeText={text => setRetypePassword(text)}
                    ></TextInput>
                    <TouchableOpacity onPress={onChangeRetypeIsViewPass} style={{ alignSelf: 'center' }}>
                        <View >
                            {retypeviewPass ? <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/hide-5682399-4743595.png' }} /> : <Image style={styles.eyesIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-64/show-5682410-4743606.png' }} />}
                        </View>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.btnlogin}
                // onPress={onHandleResetPass} 
                >
                    <Text style={styles.btnloginContent}>Đổi mật khẩu</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}