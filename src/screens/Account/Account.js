import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React from 'react';
import AccountStyles from './AccountStyles';

export default function Account({ navigation }) {

    return (
        <ScrollView style={AccountStyles.wrapper}>
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>



                {/** Profile */}
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={AccountStyles.profileArea}>
                    <View style={AccountStyles.userAvatar}>
                        <Image style={AccountStyles.imgAvatar} source={require('../../assets/images/AccountImage/avatar_profile1.png')} />
                    </View>
                    <View style={AccountStyles.userInfo}>
                        <Text style={AccountStyles.nameText}>Dũng</Text>
                        <View style={{ flexDirection: 'row', display: 'flex' }}>
                            <Image style={{ width: 15, height: 15, marginTop: 5 }} source={require('../../assets/images/AccountImage/edit.png')} />
                            <Text style={AccountStyles.textUpdate}>Chỉnh sửa tài khoản </Text>
                        </View>
                    </View>
                </TouchableOpacity>







                {/** Recommened */}
                <View style={AccountStyles.recommend}>
                    <View style={AccountStyles.titlePart}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 17, marginBottom: 5 }}>Ưu đãi và tiết kiệm</Text>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/ticket.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Ưu đãi</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/member.jpg')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Gói hội viên</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/introduction.jpg')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Giới thiệu</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={AccountStyles.recommendMyAccount}>
                    <View style={AccountStyles.titlePart}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 17, marginBottom: 5 }}>Tài khoản của tôi</Text>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/ticket.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Ưu đãi cho thành viên</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/order.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Đơn mua</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/love.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Sản phẩm yêu thích</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")} style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/pass.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Đổi mật khẩu</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={AccountStyles.recommend}>
                    <View style={AccountStyles.titlePart}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 17, marginBottom: 5 }}>Tổng quát</Text>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/hepl.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Trung tâm trợ giúp</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/setting.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Cài đặt</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={AccountStyles.btnFunctionChoose}>
                            <View style={AccountStyles.imageFunc}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/AccountImage/share.png')} />
                            </View>
                            <View style={AccountStyles.btnChooseContent}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' }}>Chia sẻ phản hồi</Text>
                            </View>
                            <View style={AccountStyles.moveTo}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/AccountImage/chevron-right--v1.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>




                {/** Btn Logout */}
                <View style={AccountStyles.logOut}>
                    <TouchableOpacity style={AccountStyles.btnLogout}>
                        <Text style={AccountStyles.textLogout}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
