import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#f0f0f0'
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
        // backgroundColor: 'white'
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
        backgroundColor: '#F0F0F0',
        borderColor: '#000',
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
});