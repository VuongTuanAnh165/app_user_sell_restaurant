import { StyleSheet, Dimensions } from "react-native";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    imgBg: {
        flex: 1,
        alignItems : 'center',
        height: windowHeight,
        justifyContent: 'space-around'
    },
    title:{
        marginBottom: 15
    },
    text: {
        fontSize: 30,
        fontWeight: "700",
        color: '#fff',
        fontFamily: "Nunito"
    },
    inputForm: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: "80%",
        borderRadius: 10,
        padding: 16,
    },
    inputItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 70,
        marginVertical: 10,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: '100%',
        // borderWidth: 1,
        borderRadius: 10
    },
    btn: {
        marginTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4cd964',
        height: 60,
        borderRadius: 10
    },
    nvgLogin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgIcon: {
        width: 15,
        height: 15,
        tintColor: '#fff'
    }
});