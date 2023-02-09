import { View, Animated, Text, ScrollView, BackHandler, TouchableOpacity, ImageBackground, Image, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import styles from './styles';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import DynamicHeader from '../../../components/DynamicHeader';
import { getImagePath } from '../../../utils';
import { Dropdown } from 'react-native-element-dropdown';



const data = [
    { label: 'Ha Noi', value: '1' },
    { label: 'TP.Ho Chi Minh', value: '2' },
    { label: 'Nghe An', value: '3' },
    { label: 'Sai Gon', value: '4' },
    { label: 'Vinh', value: '5' },
    { label: 'Thanh Hoa', value: '6' },
    { label: 'Thua Thien Huesdfsdfsd', value: '7' },
    { label: 'Nha Trang', value: '8' },
];



export default function Restaurant() {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const [dataDish, setDataDish] = useState();
    const [dataRes, setDataRes] = useState();
    const [dataCategory, setDataCategory] = useState();
    const [dataBranch, setDataBranch] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [select, setSelect] = useState(null);



    useEffect(() => {
        getListItems();
        return () => {

        };
    }, []);


    const getListItems = () => {
        const apiURL = 'https://marvelous.pw/api/restaurant/show/1';
        fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTkwNWQ4ZDljZjY2MjExYWNlMjQ0NzdlOWE5NmNjMTEwYWE1MDM4YzVhMGIyOGRhYjU0ZWFlZWUwMDQxZmI0MjQxOGIyYTBiYTdjYzZlNjUiLCJpYXQiOjE2Njk4OTc2NjUuMjA5ODIxLCJuYmYiOjE2Njk4OTc2NjUuMjA5ODI0LCJleHAiOjE3MDE0MzM2NjUuMjA3NDQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.eodFoPgscaN4gpEGA2FViv6QJ-6Wfw4lelO0IqjOQx_5g20SBMBzSkfxSP5TvyMU9ebfhT8maFdOfw9gZUNgEkWdQpwy0BM8CKbfdiHsyw7TkQuAda01VcqJj0gSeJFqY4o1RJ45osO_5VZUyszK8xWqLgOgrJe-O-ZzaQ2wVsyV0dlphX2I0je0MJSVH6n6iNJdWsSd8JAmtqlDhs6KR23Hl5e_eDnd4hkMElSLIu1BTOjdUk7J03PjvEw_t8_QWebVQiVk1S0mFx0GlChfzWOvUjZ-rlpfrOSyUV1W8spEXBi0zPv8ajHZL01lmWuI-z88LrAIdJNWv6JWlMLPQoPqggPAs9ZLP0VRTLZM012aghlMLtPFkM4MGnt7YTr1a047nUGKG1nS9MfNEaFv4APKCEVKLtkmb-6DnVv7MQE-DeMJmRykIvKiYtwcXoH7pU0HeP8QHx1h8yKg1-GTIDeWdtDUuxeMquQNeEMZxq0g7gr6FfoHwWy4tqFhS3N-X_fL6mUjNx_av1u2nlsOkaVC3jgZ4tYzigeUQpsbxOkUimNlr58XiK28EXm4-s-J_G-CgS7kTLgLteJ-eg3rhxjOd_q3D-nK1MucnbdrtUHq_myulg7iZnYl12mQfJh0dbQKEQUKSNpBoQl9_cTI-XIQPD2f8bEC_gpittRb0JU"
            }
        })
            // .then((res) => console.log("DATATATAAT", res))
            .then((res) => res.json())
            .then((resJson) => {
                setDataRes(resJson.data.restaurant);
                // console.log("REStaurant:", dataRes);
                setDataDish(resJson.data.dishs);
                setDataCategory(resJson.data.category);
                // console.log("Cate:", dataCategory);
                // setDataBranch(resJson.data.branchs);
                // console.log("DATA:", resJson.data.restaurant);
                // console.log("DATA.data:", resJson.data.category);
            }).catch((error) => {
                console.log('Error:', error);
            }).finally(() => setIsLoading(false));
    };


    return (
        <SafeAreaView style={styles.container}>


            <DynamicHeader />
            <Animated.View style={[
                styles.headerBanner,
                {
                    height: scrollY.interpolate({
                        inputRange: [10, 160, 185],
                        outputRange: [130, 20, 0],
                        extrapolate: 'clamp'
                    }),
                    opacity: scrollY.interpolate({
                        inputRange: [1, 75, 170],
                        outputRange: [1, 1, 0],
                        extrapolate: 'clamp'
                    })
                }
            ]}>

                <ImageBackground
                    source={require('../../../assets/images/RestaurantImage/ground1.jpg')} resizeMode='cover' blurRadius={20}
                    style={styles.bannerInfo}>
                    <View style={styles.logoResImg}>
                        <Image
                            source={require('../../../assets/images/RestaurantImage/avatarRes.png')}
                            style={{ width: 85, height: 85, borderRadius: 85 / 2 }} />
                    </View>
                    <View style={styles.infoRes}>
                        <View style={styles.infoArea}>
                            <View style={styles.topFormRes}>
                                <Text style={styles.nameRes} numberOfLines={1} ellipsizeMode={'tail'}>Restaurant's Name </Text>
                            </View>
                            <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                                <View style={{ width: '40%', height: '100%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#F0F0F0' }}>Chi Nhánh:</Text>
                                </View>
                                <Dropdown
                                    data={data}
                                    search
                                    // maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Chi Nhánh"
                                    searchPlaceholder="Search..."
                                    value={select}
                                    onChange={item => {
                                        setSelect(item.value);
                                    }}
                                    style={{ width: '60%', height: 30 }}
                                    placeholderStyle={{ color: '#F0F0F0' }}
                                    selectedTextStyle={{ color: '#F0F0F0', fontSize: 16 }}
                                    inputSearchStyle
                                />
                            </View>
                            <View style={styles.BotFormRes}>
                                <View style={styles.infoBotRes}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/images/RestaurantImage/time.png')} />
                                    <Text style={{ color: '#F0F0F0', paddingLeft: 3 }}>
                                        8am - 23pm
                                    </Text>
                                </View>
                                <View style={styles.infoBotRes}>
                                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/images/RestaurantImage/rate.png')} />
                                    <Text style={{ color: '#F0F0F0', paddingLeft: 3 }}>
                                        5/5 (3 Reviewers)
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btnRes}>
                        <View style={styles.infoBtnRes}>
                            <TouchableOpacity style={styles.infomationBtn}>
                                <Image source={require('../../../assets/images/RestaurantImage/info.png')}
                                    style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.orderDirectBtnRes}>
                            <TouchableOpacity style={styles.orderDirect}>
                                <Text style={{ color: 'white', fontWeight: '900' }}>Đặt bàn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>



            {/* <View style={{ width: '100%', height: 60, marginTop: 3, backgroundColor: 'white' }}>
                <ScrollView horizontal={true}>
                    {dataCategory.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.menuItem}><Text style={styles.gridMenu}>{item.name}</Text></TouchableOpacity>
                        );
                    })}
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.gridMenu}>Mục 1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.gridMenu}>Mục 1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.gridMenu}>Mục 1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.gridMenu}>Mục 1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.gridMenu}>Mục 1</Text></TouchableOpacity>
                </ScrollView>
            </View> */}

            {isLoading ? <ActivityIndicator /> : (

                <ScrollView

                    style={{ marginBottom: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        },
                    }],
                        { useNativeDriver: false })}
                >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', minHeight: 100 }} >
                        {dataDish.map((item, index) => {
                            return (

                                <View key={index} style={styles.productArea}>

                                    <TouchableOpacity style={{ width: '100%', height: '80%' }}>
                                        <View style={styles.ImgArea}>
                                            <Image
                                                style={styles.ImgProduct}
                                                source={{ uri: getImagePath(item.image) }}

                                            />
                                        </View>

                                        <View style={styles.infoProductArea}>
                                            <Text numberOfLines={2} ellipsizeMode={'tail'} style={{ color: 'black', paddingLeft: 5, paddingTop: 5, fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text style={{ color: 'red', paddingLeft: 5, paddingTop: 5, fontSize: 13 }}>$100</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.btnProductArea}>
                                        <TouchableOpacity style={styles.btnProduct}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Thêm vào giỏ</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );

                        })}
                    </View>
                    <View style={styles.endOfList}>
                        <Text style={styles.endOfListText}>
                            Không tìm thấy sản phẩm nào khác!
                        </Text>
                    </View>



                </ScrollView>
            )}

        </SafeAreaView>
    );
}