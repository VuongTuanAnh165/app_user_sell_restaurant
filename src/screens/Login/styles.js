import { StyleSheet, Dimensions } from "react-native";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {},
    wrapper: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#fff',
    },
    logolayout: {
        width: '100%',
        height: windowHeight/2,
        backgroundColor: '#bce7df',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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

    logo: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        // backgroundColor: '#03c6bc',
        justifyContent: 'center',
        //marginTop: '10%',
    },
    logoImage: {
        width: 167,
        height: '100%',
        //backgroundColor: '#fec103'
    },
    title: {
        width: '100%',
        height: 70,
        alignItems: 'center',
    },
    titleContent: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
        fontStyle: 'italic'
    },
    textboxlayout: {
        width: '80%',
        minheight: 200,
        marginHorizontal: '10%',
        backgroundColor: 'white',
        position: 'relative',
        bottom: '12%',
        borderRadius: 50,
        elevation: 10,
        //justifyContent: 'space-evenly'
    },
    userSpace: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderColor: '#000',
        height: 50,
        width: '90%',
        borderRadius: 40,
        marginTop: "10%",
        elevation: 1,
        paddingLeft: 10,
        marginHorizontal: '5%'
    },
    iconUserTextInput: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    userTextbox: {
        flex: 1,
        fontSize: 16,
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
        marginLeft: '25%',
        marginTop: '10%',
        width: '50%',
        height: 50,
        backgroundColor: '#e4983e',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPass: {
        alignItems: 'center',
        marginTop: "10%"
    },
    btnloginContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    regishere: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "1%",
        marginBottom: '10%'
    }
});