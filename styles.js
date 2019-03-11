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

export default StyleSheet.create({
    container: {
        backgroundColor: styleConstants.palette.secondary,
        flex: 1,
    }
})