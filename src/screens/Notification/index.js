import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    wrapper: {
        margin: 0,
        border: 0,
        backgroundColor: '#cececece',
        width: windowWidth,
        height: windowHeight
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    header: {
        height: "8%",
        width: windowWidth,
    },
    titleHeader: {
        width: '30%',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: "10%",
        color: 'white'
    },
    boxIcon: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconHeader: {
        width: 20,
        height: 20,
        marginHorizontal: '3%',
    },
    container: {
        width: '100%',
        height: '55%',
        backgroundColor: '#fff',
    },
    item: {
        width: '100%',
        height: '20%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        flexDirection: "row",
        alignItems: 'center'
    },
    boxIconContainer: {
        width: '10%',
        height: '43%',
        marginHorizontal: '3%'
    },
    iconContainer: {
        width: '100%',
        height: '100%'
    },
    titleContainer: {
        width: '80%'
    },
    nameTitle: {

    },
    textDiscount: {
        fontWeight: 'bold'
    },
    contentTitle: {

    },
    contentDiscount: {
        fontSize: 14
    },
    iconArrow: {
        width: '10%',
    },
    footerTitle: {
        height: '4%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '4%',
    },
    rating: {
        backgroundColor: '#fff',
        height: "33%",
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    customRatingBarStyle:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    starImgStyle:{
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    buttonRating: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textRating: {
        fontSize: 15,
    }
})