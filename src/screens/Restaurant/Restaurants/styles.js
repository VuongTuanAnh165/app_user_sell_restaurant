import { StyleSheet, Dimensions } from "react-native";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#F0F0F0'
    },
    headerBanner: {
        width: '100%',
        height: 130
    },
    bannerImg: {
        width: '100%',
        height: 130,
    },
    bannerInfo: {
        width: '100%',
        height: 130,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    logoResImg: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoRes: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    infoArea: {
        width: '90%',
        height: '80%',
        justifyContent: 'space-evenly'
    },
    topFormRes: {
        width: '100%',
        height: '27%',
        flexDirection: 'row'
    },
    nameRes: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    BotFormRes: {
        width: '100%',
        height: '50%',
        paddingTop: 5
    },

    infoBotRes: {
        width: '100%',
        height: '50%',
        flexDirection: 'row'
    },
    btnRes: {
        width: '15%',
        height: '100%',
        // backgroundColor: 'white'
    },
    infoBtnRes: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        paddingTop: 15
    },
    infomationBtn: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        // position: 'relative',
        // bottom: '20%'
    },
    orderDirectBtnRes: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        position: 'relative',
        right: 10,
        top: 5
    },

    orderDirect: {
        width: '100%',
        height: 30,
        backgroundColor: '#e4983e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    menuItem: {
        minWidth: 110,
        height: '100%',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'

    },
    gridMenu: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    list: {
        position: 'relative'
    },
    productArea: {
        width: "45%",
        marginHorizontal: '2.5%',
        marginVertical: 7,
        height: 220,
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    ImgArea: {
        width: '100%',
        height: '65%'
    },
    ImgProduct: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    infoProductArea: {
        width: '100%',
        height: '35%',
    },
    btnProductArea: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red' 
    },
    btnProduct: {
        width: '80%',
        height: '70%',
        backgroundColor: '#e4983e',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    endOfList: {
        width: '100%',
        height: 40,
        backgroundColor: '#F0F0F0',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    endOfListText: {
        color: 'red',
        fontSize: 18,
        fontWeight: '700'
    }
});