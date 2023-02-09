import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './index';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import Cart from '../../assets/images/icon/Cart'

export default function Notification() {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = require('../../assets/images/icon/star-yellow.png');
  const starImgCorner = require('../../assets/images/icon/star-grey.png');
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, index) => {
            return (
              <TouchableOpacity
                key={item}
                activeOpacity={0.7}
                onPress={() => setDefaultRating(item)}
              >
                <Image
                  style={styles.starImgStyle}
                  source={
                    item <= defaultRating
                      ? require('../../assets/images/icon/star-yellow.png')
                      : require('../../assets/images/icon/star-grey.png')
                  }
                />
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>

      <View style={styles.header}>
        <LinearGradient style={styles.bgImage} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D8AB37', '#F18345']}>
          <View style={styles.titleHeader}>
            <Text style={styles.textHeader}>Thông báo</Text>
          </View>
          <View style={styles.boxIcon}>
            <Image style={styles.iconHeader} source={require('../../assets/images/icon/shopping-cart.png')} />
            <Image style={styles.iconHeader} source={require('../../assets/images/icon/bell.png')} />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.container}>

        <TouchableOpacity style={styles.item}>
          <View style={styles.boxIconContainer}>
            <Image style={styles.iconContainer} source={require("../../assets/images/icon/discount.png")} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.nameTitle}>
              <Text style={styles.textDiscount}>Khuyến mãi</Text>
            </View>
            <View style={styles.contentTitle}>
              <Text style={styles.contentDiscount}>Độc quyền chỉ có trên SkyLine mới có, siêu ưu đãi</Text>
            </View>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.boxIconContainer}>
            <Image style={styles.iconContainer} source={require("../../assets/images/icon/giftbox.png")} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.nameTitle}>
              <Text style={styles.textDiscount}>Giải thưởng</Text>
            </View>
            <View style={styles.contentTitle}>
              <Text style={styles.contentDiscount}>Cũng chả biết là cho cái giải thưởng gì vào cả</Text>
            </View>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.boxIconContainer}>
            <Image style={styles.iconContainer} source={require("../../assets/images/icon/discount.png")} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.nameTitle}>
              <Text style={styles.textDiscount}>Hoạt động</Text>
            </View>
            <View style={styles.contentTitle}>
              <Text style={styles.contentDiscount}>Chả có cái hoạt động gì cả đâu, đừng bấm vào xem</Text>
            </View>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.boxIconContainer}>
            <Image style={styles.iconContainer} source={require("../../assets/images/icon/discount.png")} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.nameTitle}>
              <Text style={styles.textDiscount}>Khuyến mãi</Text>
            </View>
            <View style={styles.contentTitle}>
              <Text style={styles.contentDiscount}>Độc quyền chỉ có trên SkyLine mới có, siêu ưu đãi</Text>
            </View>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.boxIconContainer}>
            <Image style={styles.iconContainer} source={require("../../assets/images/icon/discount.png")} />
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.nameTitle}>
              <Text style={styles.textDiscount}>Khuyến mãi</Text>
            </View>
            <View style={styles.contentTitle}>
              <Text style={styles.contentDiscount}>Độc quyền chỉ có trên SkyLine mới có, siêu ưu đãi</Text>
            </View>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.footerTitle}>
        <Text style={{ fontSize: 16, color: 'grey' }}>Đánh giá</Text>
      </View>

      <View style={styles.rating}>
        <Text style={{ fontSize: 16, marginTop: 20 }}>Xin vui lòng đánh giá dịch vụ của chúng tôi</Text>
        <View style={styles.starItem}>
          <CustomRatingBar />
        </View>
        <LinearGradient style={{ width: '23%', height: "13%", borderRadius: 30, marginTop: 20, flexDirection: 'row', alignItems: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D8AB37', '#F18345']}>
          <TouchableOpacity style={styles.buttonRating}>
            <Text style={styles.textRating}>Đánh giá</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

    </View>
  );
}