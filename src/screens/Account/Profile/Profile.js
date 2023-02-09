import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile() {


    const [image, setImage] = useState('https://marvelous.pw/img/avatar_default.png?fbclid=IwAR0OHVrQcZJ1zHSsnGqA4XlqKwvsrtrIVNbGM8t6GqUI49jmBEvE90_dfMw');
    //console.log(image);

    const [userName, setUserName] = useState('Nguyễn Dũng');
    const [phonenumber, setPhone] = useState('0918374458');
    const [email, setEmail] = useState('nguyendinhtiendung07@mail.com');
    const [address, setAddress] = useState('Hà Nội');

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const uploadPhoto = () => {
        setModalVisible(true);
    };

    const photofromlibary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            setImage(image.path);
            setModalVisible(false);
            console.log('anh o day:', image.path);
        });
    };

    const takeaphoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    };



    return (
        <ScrollView style={styles.wrapper}>
            <View style={{ flex: 1 }}>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalForm}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={photofromlibary} style={styles.uploadGaleryImage}>
                                <Image style={{ height: 50, width: 50 }} source={require('../../../assets/images/AccountImage/Profile/galery.png')} />
                                <Text style={{ color: 'black' }}>Thư Viện</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={takeaphoto} style={styles.uploadTakeImage}>
                                <Image style={{ height: 50, width: 50 }} source={require('../../../assets/images/AccountImage/Profile/takePhoto.png')} />
                                <Text style={{ color: 'black' }}>Chụp ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalBtnCancel}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>



            <View style={{ alignItems: 'center', }}>



                {/** Profile */}
                <View style={styles.avatarArea}>
                </View>
                <TouchableOpacity onPress={uploadPhoto}>
                    <Image style={styles.avatarAreaB} source={{ uri: image }} />
                </TouchableOpacity>


                <View style={styles.profileInfo}>
                    <Text style={styles.title}>Thông tin cá nhân</Text>


                    <View style={styles.profileContent}>
                        <View style={styles.passSpace}>
                            <Image style={styles.iconUserTextInput}
                                source={require('../../../assets/images/AccountImage/Profile/username.png')}
                            />
                            <TextInput style={styles.passTextbox}
                                placeholder="Nhập tên người dùng"
                                placeholderTextColor="gray"
                                value={userName}
                                onChangeText={text => setUserName(text)}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.profileContent}>
                        <View style={styles.passSpace}>
                            <Image style={styles.iconUserTextInput}
                                source={require('../../../assets/images/AccountImage/Profile/phone.png')}
                            />
                            <TextInput style={styles.passTextbox}
                                placeholder="Nhập số điện thoại"
                                placeholderTextColor="gray"
                                value={phonenumber}
                                onChangeText={text => setPhone(text)}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.profileContent}>
                        <View style={styles.passSpace}>
                            <Image style={styles.iconUserTextInput}
                                source={require('../../../assets/images/emailIcon.png')}
                            />
                            <TextInput style={styles.passTextbox}
                                placeholder="Nhập email"
                                placeholderTextColor="gray"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.profileContent}>
                        <View style={styles.passSpace}>
                            <Image style={styles.iconUserTextInput}
                                source={require('../../../assets/images/AccountImage/Profile/address.png')}
                            />
                            <TextInput style={styles.passTextbox}
                                placeholder="Nhập địa chỉ"
                                placeholderTextColor="gray"
                                value={address}
                                onChangeText={text => setAddress(text)}
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btnlogin}
                    // onPress={onHandleResetPass} 
                    >
                        <Text style={styles.btnloginContent}>Lưu thay đổi</Text>
                    </TouchableOpacity>


                </View>










            </View>
        </ScrollView>
    );
}
