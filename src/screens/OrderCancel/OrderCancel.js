import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../OrderCancel/index';

export default function OrderCancel() {
  return (
    <View style={styles.wrapper}>

      <View style={styles.header}>
        <LinearGradient style={styles.bgImage} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D8AB37', '#F18345']}>
          <View style={styles.titleHeader}>
            <Text style={styles.textHeader}>Huỷ đơn</Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleContainer}>Hãy cho chúng tôi biết lý do tại sao bạn huỷ đơn ?</Text>
      </View>

      <View style={styles.container}>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Giao hàng quá lâu</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Thích thì huỷ thôi</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Bán hàng trái phép</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Thay đổi mã khuyến mãi</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Phí ship quá đắt</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Không muốn ăn nữa</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Chuẩn bị món ăn lâu</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Muốn đổi món khác á</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Không trả lời có được hong?</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentCancel}>Lý do khác</Text>
          </View>
          <View style={styles.iconArrow}>
            <Image style={{ width: '25%', height: '16%' }} source={require('../../assets/images/icon/right-arrow.png')} />
          </View>
        </TouchableOpacity>


      </View>
    </View>
  );
}
