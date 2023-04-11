import {
  View,
  Text,
  Image,
  TouchableOpacity, Dimensions,
  TextInput,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import { Icon } from '@rneui/themed';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect } from 'react';
import SwiperSlide from './SwiperSlide';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../config/colors';

export default function Home() {
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');


  // useEffect(() => {
  //   // setIsLoading(true);
  //   getData();
  // }, [currentPage]);

  useEffect(() => {
    // setIsLoading(true);
    getData();
    getCateData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    // const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=` + currentPage;
    const apiURL = 'https://jsonplaceholder.typicode.com/photos?_limit=4';
    fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTkwNWQ4ZDljZjY2MjExYWNlMjQ0NzdlOWE5NmNjMTEwYWE1MDM4YzVhMGIyOGRhYjU0ZWFlZWUwMDQxZmI0MjQxOGIyYTBiYTdjYzZlNjUiLCJpYXQiOjE2Njk4OTc2NjUuMjA5ODIxLCJuYmYiOjE2Njk4OTc2NjUuMjA5ODI0LCJleHAiOjE3MDE0MzM2NjUuMjA3NDQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.eodFoPgscaN4gpEGA2FViv6QJ-6Wfw4lelO0IqjOQx_5g20SBMBzSkfxSP5TvyMU9ebfhT8maFdOfw9gZUNgEkWdQpwy0BM8CKbfdiHsyw7TkQuAda01VcqJj0gSeJFqY4o1RJ45osO_5VZUyszK8xWqLgOgrJe-O-ZzaQ2wVsyV0dlphX2I0je0MJSVH6n6iNJdWsSd8JAmtqlDhs6KR23Hl5e_eDnd4hkMElSLIu1BTOjdUk7J03PjvEw_t8_QWebVQiVk1S0mFx0GlChfzWOvUjZ-rlpfrOSyUV1W8spEXBi0zPv8ajHZL01lmWuI-z88LrAIdJNWv6JWlMLPQoPqggPAs9ZLP0VRTLZM012aghlMLtPFkM4MGnt7YTr1a047nUGKG1nS9MfNEaFv4APKCEVKLtkmb-6DnVv7MQE-DeMJmRykIvKiYtwcXoH7pU0HeP8QHx1h8yKg1-GTIDeWdtDUuxeMquQNeEMZxq0g7gr6FfoHwWy4tqFhS3N-X_fL6mUjNx_av1u2nlsOkaVC3jgZ4tYzigeUQpsbxOkUimNlr58XiK28EXm4-s-J_G-CgS7kTLgLteJ-eg3rhxjOd_q3D-nK1MucnbdrtUHq_myulg7iZnYl12mQfJh0dbQKEQUKSNpBoQl9_cTI-XIQPD2f8bEC_gpittRb0JU"
      }
    })
      // .then((res) => console.log("DATATATAAT", res))
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        // console.log("DATA:", resJson);
        setIsLoading(false);
      }).catch((error) => {
        console.log('Error:', error);
      });
  };


  const getCateData = () => {
    setIsLoading(true);
    const apiURL = 'https://jsonplaceholder.typicode.com/photos?_limit=14';
    fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTkwNWQ4ZDljZjY2MjExYWNlMjQ0NzdlOWE5NmNjMTEwYWE1MDM4YzVhMGIyOGRhYjU0ZWFlZWUwMDQxZmI0MjQxOGIyYTBiYTdjYzZlNjUiLCJpYXQiOjE2Njk4OTc2NjUuMjA5ODIxLCJuYmYiOjE2Njk4OTc2NjUuMjA5ODI0LCJleHAiOjE3MDE0MzM2NjUuMjA3NDQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.eodFoPgscaN4gpEGA2FViv6QJ-6Wfw4lelO0IqjOQx_5g20SBMBzSkfxSP5TvyMU9ebfhT8maFdOfw9gZUNgEkWdQpwy0BM8CKbfdiHsyw7TkQuAda01VcqJj0gSeJFqY4o1RJ45osO_5VZUyszK8xWqLgOgrJe-O-ZzaQ2wVsyV0dlphX2I0je0MJSVH6n6iNJdWsSd8JAmtqlDhs6KR23Hl5e_eDnd4hkMElSLIu1BTOjdUk7J03PjvEw_t8_QWebVQiVk1S0mFx0GlChfzWOvUjZ-rlpfrOSyUV1W8spEXBi0zPv8ajHZL01lmWuI-z88LrAIdJNWv6JWlMLPQoPqggPAs9ZLP0VRTLZM012aghlMLtPFkM4MGnt7YTr1a047nUGKG1nS9MfNEaFv4APKCEVKLtkmb-6DnVv7MQE-DeMJmRykIvKiYtwcXoH7pU0HeP8QHx1h8yKg1-GTIDeWdtDUuxeMquQNeEMZxq0g7gr6FfoHwWy4tqFhS3N-X_fL6mUjNx_av1u2nlsOkaVC3jgZ4tYzigeUQpsbxOkUimNlr58XiK28EXm4-s-J_G-CgS7kTLgLteJ-eg3rhxjOd_q3D-nK1MucnbdrtUHq_myulg7iZnYl12mQfJh0dbQKEQUKSNpBoQl9_cTI-XIQPD2f8bEC_gpittRb0JU"
      }
    })
      // .then((res) => console.log("DATATATAAT", res))
      .then((res) => res.json())
      .then((resJson) => {
        setDataCate(resJson);
        // console.log("DATA:", resJson);
        setIsLoading(false);
      }).catch((error) => {
        console.log('Error:', error);
      });
  };


  // const handleLoadMore = () => {

  //   setIsLoading(true);
  // };




  // News and Updates
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: '95%', marginTop: 10, height: 140, backgroundColor: 'rgba(255,255,255,0.75)', marginBottom: 10, flexDirection: 'row', borderRadius: 12, alignItems: 'center' }}>
        <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: '80%', height: '80%', borderRadius: 10 }}
            source={{ uri: item.url }}
          />
        </View>
        <View style={{ width: '60%', height: '80%', }}>
          <View style={{ width: '94%', height: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15 }}>Comment</Text>
            <Text style={{ fontSize: 14 }}>26 July 2021</Text>
          </View>
          <View style={{ width: '94%', height: '50%' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent: 'center', }}>
              <Text numberOfLines={2} style={{ color: '#e4983e', fontSize: 17.5, fontWeight: 'bold', }}>{item.title}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '94%', height: '30%', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 25, height: 25, borderRadius: 25 / 2 }}
              source={{ uri: item.url }}
            />
            <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>Người Comment</Text>
          </View>
        </View>
      </View>
    );
  };

  const filterFood = () => data.filter(eachFood => eachFood.title.toLowerCase().includes(searchText.toLowerCase()));


  // const renderFooter = () => {
  //   return (

  //     <View style={{ width: '100%', height: 40, backgroundColor: '#fff' }}>
  //       {isLoading ? (
  //         <ActivityIndicator size={'large'} style={{ alignItems: 'center', justifyContent: 'center' }} />
  //       ) : (
  //         <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => {
  //           setCurrentPage(currentPage + 1);
  //           getData();
  //         }}>
  //           <Text style={{ fontSize: 20, color: 'black' }}>Xem thêm</Text>
  //         </TouchableOpacity>
  //       )}
  //     </View>
  //   );
  // };

  // renderItem danh mục Flashsale 



  const _renderItem = ({ item, index }) => {
    // console.log("List", item);
    return (

      <View style={{ width: 178, height: 310, marginTop: 18, backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: 13, marginLeft: 20 }} >
        <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: item.url }}
            style={{ width: '85%', height: '85%', borderRadius: 10 }}
          />
        </View>
        <View style={{ width: '100%', height: '50%', alignItems: 'center' }}>
          <View style={{ width: '85%', height: '20%', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>Category</Text>
            <View style={{ width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 15 }}>
              <Text style={{ color: 'black', fontSize: 15 }}>4.5</Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require('../../assets/images/Home/rate.png')} />
            </View>
          </View>

          <View style={{ width: '85%', height: '80%', alignItems: 'center', }}>
            <TouchableOpacity style={{ width: '100%', height: '40%', justifyContent: 'center', }}>
              <Text numberOfLines={2} style={{ color: '#e4983e', fontSize: 17.5, fontWeight: 'bold', }}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
              <View style={{ width: '55%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 16.5 }}>$1100</Text>
              </View>
              <View style={{ width: '45%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <LinearGradient colors={['#cddc39', '#ffcc00', '#ff5722']} style={{ width: 50, height: 50, borderRadius: 50 / 2, }}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 37, fontWeight: '600', color: 'white', textAlign: 'center' }}>+</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderItemHorizontal = ({ item, index }) => {
    return (
      <View style={{ width: 250, height: 310, marginTop: 18, backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: 10, marginRight: 20 }} >
        <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: item.url }}
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
          />
        </View>
        <View style={{ width: '100%', height: '50%', alignItems: 'center' }}>
          <View style={{ width: '85%', height: '20%', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>Category</Text>
            <View style={{ width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 40 }}>
              <Text style={{ color: 'black', fontSize: 15 }}>4.5</Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require('../../assets/images/Home/rate.png')} />
            </View>
          </View>

          <View style={{ width: '85%', height: '80%', alignItems: 'center', }}>
            <TouchableOpacity style={{ width: '100%', height: '40%', justifyContent: 'center', }}>
              <Text numberOfLines={2} style={{ color: '#e4983e', fontSize: 17.5, fontWeight: 'bold', }}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
              <View style={{ width: '55%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 16.5 }}>$1100</Text>
              </View>
              <View style={{ width: '45%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <LinearGradient colors={['#cddc39', '#ffcc00', '#ff5722']} style={{ width: 50, height: 50, borderRadius: 50 / 2, }}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 37, fontWeight: '600', color: 'white', textAlign: 'center' }}>+</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };


  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}>
          <Image style={{ width: 80, height: 80, borderRadius: 80 / 2 }} source={{ uri: item.url }} />
        </View>
        <Text style={{ fontSize: 18, color: 'black', marginTop: 7, fontWeight: '500' }}>Category</Text>
      </TouchableOpacity>
    );
  };



  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={{ position: 'absolute', justifyContent: "space-around", top: 20 }}>
          <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-1.png')} />
          <Image style={styles.image} source={require('../../assets/images/bgshapes-yellow-2.png')} />
        </View>
        {/* Header  */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.navbar}>
            <Image
              source={require('../../assets/images/Home/menu.png')}
              style={styles.iconNavbar}
            />
          </TouchableOpacity>
          <View style={styles.welcome}>
            <Text style={styles.welcomeTitle} >
              Chào mừng đến với
            </Text>
            <Text style={{ color: colors.title, fontSize: 19, fontWeight: '600' }}>
              SkyLine
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.introduce}>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Image style={styles.imgContent} source={require('../../assets/images/icon/shops.png')} />
                <Text>Nhà hàng</Text>
                <Text>Chất lượng tốt nhất</Text>
              </View>
              <View style={styles.contentItem}>
                <Image style={styles.imgContent} source={require('../../assets/images/icon/delivery-bike.png')} />
                <Text>Vận chuyển</Text>
                <Text>Luôn luôn đúng giờ</Text>
              </View>
            </View>
          </View>

          {/* Danh mục category */}
          <View style={{ width: '100%', height: 140, justifyContent: 'center', marginTop: 5 }}>
            <View style={styles.menuType}>
              <FlatList
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={dataCate}
                renderItem={renderCategory}
                listKey={(item, index) => `_key${index.toString()}`}
                keyExtractor={(item, index) => `_key${index.toString()}`}
                numColumns={1}
              />
            </View>
          </View>

          {/* Swiper Slide */}
          <View style={{ width: '100%', height: 250, marginTop: 5 }}>
            <SwiperSlide />
          </View>


          {/* Popular*/}

          <View style={{ width: '100%', marginTop: 10 }}>
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
              <View style={{ width: '50%', height: '100%', paddingLeft: 20, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Phổ biến</Text>
              </View>
              <TouchableOpacity style={{ width: '50%', height: '100%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{
                  color: '#e4983e',
                  fontSize: 20
                }}>
                  Xem tất cả
                </Text>
                <Image style={{ width: 20, height: 20, marginLeft: 5, marginRight: 10 }}
                  source={require('../../assets/images/Home/chevorRight.png')} />
              </TouchableOpacity>
            </View>

            <FlatList
              // showsHorizontalScrollIndicator={false}
              // horizontal={true}
              data={data}
              listKey={(item, index) => `_key${index.toString()}`}
              keyExtractor={(item, index) => index.toString()}
              renderItem={_renderItem}
              numColumns={2}
            />
          </View>

          {/* Trending*/}
          <View style={styles.productHot}>
            <Text style={styles.title}>Món ăn đang hot</Text>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={_renderItemHorizontal}
            />
          </View>

          {/* Danh sách nhà hàng bạn có thể quan tâm */}
          <View style={styles.productHot}>
            <Text style={styles.title}>Bình luận</Text>

            <FlatList
              data={filterFood()}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            // ListFooterComponent={renderFooter}
            // onEndReached={handleLoadMore}
            // onEndReachedThreshold={0}
            />
          </View>

          <View style={{ width: '100%', height: 40 }}>

          </View>
        </ScrollView >


      </View>
    </SafeAreaView>
  );
}