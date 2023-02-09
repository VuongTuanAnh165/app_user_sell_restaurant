import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    wrapper: {
        margin: 0,
        border: 0,
        backgroundColor: '#cececece',
        width: windowWidth,
        height: windowHeight,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    header: {
        height: "10%",
        width: windowWidth
    },
    titleHeader: {
        width: '30%',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: "10%",
        color: 'white'
    },
    title:{
        width: windowWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '5%'
    },
    container: {
        width: '100%',
        height: '85%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    item: {
        width: '100%',
        height: '8.5%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        flexDirection: "row",
        alignItems: 'center',
    },
    titleContainer: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    contentTitle: {
        width: '90%'
    },
    contentCancel: {
        fontSize: 15,
        marginLeft: '4%',
        fontWeight: 'bold'
    },
    iconArrow: {
        width: '10%',
        alignItems:'center',
        justifyContent: 'center'
    }
})