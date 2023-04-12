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
        // justifyContent: 'space-evenly'
    },
    bgImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    orange: {
        position: "absolute",
        left: size(230),
        top: size(50)
    },
    image: {
        position: 'relative',
    },
    logoImage: {
        width: size(120),
        height: size(120),
        marginTop: size(100)
    },
    title: {
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
    textboxlayout: {
        width: '80%',
        height: size(300),
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 50,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: size(50)
    },
    titleFP: {
        color: colors.black,
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleExplane: {
        // color: 'gray',
        fontSize: 13,
        textAlign: 'center'
    },
    iconUserTextInput: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        alignItems: 'center',
    },
    userTextbox: {
        flex: 1,
        fontSize: 15,
        color: 'black',
        paddingRight: 30
    },
    textError: {
        color: 'red',
        fontStyle: 'italic',
        marginTop: "1%",
        marginLeft: '10%',
        // marginBottom: '-5%'
    },
    passSpace: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 50,
        width: '90%',
        borderRadius: 40,
        elevation: 1,
    },
    iconUserTextInput: {
        padding: 10,
        margin: 5,
        height: size(20),
        width: size(20),
    },
    passTextbox: {
        flex: 1,
        fontSize: 16,
        color: 'black',

    },
    eyesIcon: {
        width: 25,
        height: 25,
        position: 'relative',
        right: '15%'
    },

    btnlogin: {
        width: '50%',
        height: size(50),
        borderRadius: 50
    },
    btnloginContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});