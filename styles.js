import {StyleSheet} from 'react-native';

export const styleConstants = {
    palette: {
        primary: '#f0932b',
        secondary: '#dff9fb',
        white: '#FFFFFF'
    },
}

export const headerStyle = {
    backgroundColor: styleConstants.palette.primary
}

export const titleStyle = {
    color: styleConstants.palette.white,
}

export default StyleSheet.create({
    container: {
        backgroundColor: styleConstants.palette.white,
        flex: 1,
    }
})