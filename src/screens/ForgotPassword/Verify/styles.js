import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../config/colors";
import { size } from "../../../config/Responsive";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        justifyContent: 'center',
    },
    orange: {
        position: "absolute",
        left: size(230),
        top: size(50)
    },
    logoImage: {
        width: size(120),
        height: size(120),
    },
    title: {
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
    textboxlayout: {
        width: '80%',
        height: size(300),
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 50,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: size(50)
    },
    otpInput: { 
        width: '80%', 
        height: size(100), 
        // alignSelf: 'center' 
    },
    titleFP: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleExplane: {
        color: colors.black,
        fontSize: 14,
        marginHorizontal: 15,
        marginTop: 10
    },
    image: {
        position: 'relative',
    },
    btnlogin: {
        width: '40%',
        height: size(40),
        borderRadius: 40,
    },
});