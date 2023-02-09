import { StyleSheet, Dimensions } from "react-native";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
    textboxlayout: {
        width: '80%',
        minHeight: 340,
        marginHorizontal: '10%',
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 50,
        elevation: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    titleFP: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleExplane: {
        color: 'gray',
        fontSize: 16,
        marginHorizontal: 15,
        marginTop: 5
    },
    btnVerify: {
        width: '60%',
        height: 50,
        backgroundColor: '#4cd964',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtAccess: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});