import { Dimensions } from "react-native"

const UI_DEVICES = 375
const windowWidth = Dimensions.get('window').width

export function size(size) {
    if(typeof size === 'string') {
        return size
    }
    return ((windowWidth * Number(size)) / UI_DEVICES);
}