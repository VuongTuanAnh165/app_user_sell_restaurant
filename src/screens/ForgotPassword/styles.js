import { StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";
import { size
 } from "../../config/Responsive";
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
    image: {
        position: 'relative',
    },
    orange: {
        position: "absolute",
        left: size(230),
        top: size(50)
    },
    logo: {
        width: size(120),
        height: size(120),
    },
    logoImage: {
        width: size(120),
        height: size(120),
    },
    form: {
        width: size(300),
        height: size(300),
        padding: size(16),
        justifyContent: "space-around",
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        marginTop: size(50)
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
    },
    titleFP: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleExplane: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'center'
    },
    userSpace: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: size(50),
        width: '90%',
        borderRadius: 40,
        elevation: 1,
    },
    iconUserTextInput: {
        height: size(25),
        width: size(25),
        marginLeft: size(10),
        marginRight: size(10)
    },
    userTextbox: {
        fontSize: 15,
        color: 'black',
        width: '75%'
    },
    textError: {
        color: 'red',
        fontStyle: 'italic',
    },

    btnlogin: {
        width: '50%',
        height: size(50),
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnloginContent: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    regishere: {
        alignItems: 'center',
        justifyContent: 'center',
        width: size(50),
        height: size(30)
    }
});