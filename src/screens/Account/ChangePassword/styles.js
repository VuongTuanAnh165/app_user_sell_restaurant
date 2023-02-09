import { StyleSheet, Dimensions } from "react-native";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        width: windowWidth,
        minHeight: 500,
        height: windowHeight
    },
    title: {
        width: '100%',
        height: '10%',
        // backgroundColor: 'red',
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },


    passSpace: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderColor: '#000',
        height: 50,
        width: '90%',
        borderRadius: 40,
        elevation: 1,
        paddingLeft: 10,
        marginHorizontal: '5%',
        marginTop: "5%",
        // marginTop: '-5%'
    },
    iconUserTextInput: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
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
        marginHorizontal: '15%',
        marginTop: '10%',
        width: '70%',
        height: 50,
        backgroundColor: '#e4983e',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnloginContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});