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



    // Profile
    profileArea: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    userAvatar: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    userInfo: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 5
    },
    nameText: {
        color: 'black',
        //fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 19
    },

    textUpdate: {
        marginLeft: 5,
        marginTop: 5,
        color: 'grey',
    },





    // Recommened
    recommend: {
        width: '100%',
        height: 270,
        backgroundColor: '#fff',
        marginTop: 20,
        flexDirection: 'row',
    },
    recommendMyAccount: {
        width: '100%',
        height: 340,
        backgroundColor: '#fff',
        marginTop: 20,
        flexDirection: 'row',
    },

    titlePart: {
        marginHorizontal: '5%',
        //backgroundColor: 'red',
        width: '90%',
        height: '100%'
    },

    btnFunctionChoose: {
        width: '100%',
        height: 70,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'lightgray'
    },
    imageFunc: {
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    btnChooseContent: {
        height: '100%',
        width: '75%',
        justifyContent: 'center'
    },
    moveTo: {
        height: '100%',
        width: '10%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


    //Btn Logout
    logOut: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogout: {
        width: '80%',
        height: '80%',
        backgroundColor: '#e4983e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textLogout: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});