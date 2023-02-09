import { StyleSheet, Dimensions } from "react-native";
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#fff',
    },

    modalForm: {
        backgroundColor: 'white',
        width: '90%',
        height: '35%',
        marginHorizontal: '5%',
        borderRadius: 5, elevation: 1
    },
    modalContent: {
        width: '100%',
        height: '70%',
        flexDirection: 'row'
    },

    uploadGaleryImage: {
        height: 100,
        width: '40%',
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        marginHorizontal: '5%',
        marginVertical: '5%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },

    uploadTakeImage: {
        height: 100,
        width: '40%',
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        marginHorizontal: '5%',
        marginVertical: '5%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },



    modalBtnCancel: {
        width: '90%', height: '24%',
        backgroundColor: '#e4983e',
        marginHorizontal: '5%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },


    // Profile
    avatarArea: {
        width: '100%',
        height: 80,
        backgroundColor: '#e4983e',
        flexDirection: 'row'
    },
    avatarAreaB: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'relative',
        bottom: '15%',
        marginHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        position: 'relative',
        bottom: 40
    },

    profileInfo: {
        width: '100%',
        height: 400,
        // backgroundColor: 'red',
    },

    passSpace: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderColor: '#000',
        height: 50,
        width: '90%',
        borderRadius: 10,
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