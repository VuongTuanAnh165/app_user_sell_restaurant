import { StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";
import { size } from "../../config/Responsive";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: colors.bgHome,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        height: size(56),
        backgroundColor: 'rgba(255,255,255,0.75)',
        flexDirection: 'row',
        paddingLeft: size(16)
    },
    navbar: {
        width: size(25),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconNavbar: {
        width: size(25),
        height: size(25)
    },
    welcome: {
        justifyContent: 'center',
        marginLeft: size(12),
    },
    welcomeTitle: {
        color: colors.title,
        fontSize: 18,
    },
    introduce: {
        width: windowWidth,
        paddingVertical: size(16),
        alignItems: 'center'
    },
    content: {
        width: size(328),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgContent: {
        width: size(108),
        height: size(100)
    },
    image: {
        width: windowWidth,
        height: 200,
        position: 'relative'
    },
    text: {
        width: 200,
        height: 100,
        backgroundColor: 'green',
    },
    menuType: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    item: {
        width: 115,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        marginVertical: 20,
        borderWidth: 1
    },
    userSpace: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgColor,
        borderColor: colors.black,
        height: 40,
        width: '90%',
        borderRadius: 10,
        elevation: 1,
        paddingLeft: 10,
        marginHorizontal: '5%',
        marginVertical: 10
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
        fontSize: 17,
        color: 'black',
        paddingRight: 30
    },
    image: {
        position: 'relative',
    },
    contentItem: {
        alignItems: 'center'
    },
    scroll: {
        borderWidth: 1,
    },
    title: { 
        fontSize: 25, 
        fontWeight: 'bold', 
        color: 'black',
    },
    productHot: { 
        width: '100%', 
        marginTop: 30,
        paddingLeft: size(25)
    }
});